export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers }
      );
    }

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
              },
            },
          ],
        }),
      }
    );

    if (!airtableResponse.ok) {
      const error = await airtableResponse.text();
      console.error('Airtable error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save to waitlist' }),
        { status: 500, headers }
      );
    }

    // Send notification email via Brevo
    if (env.BREVO_API_KEY) {
      try {
        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': env.BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { name: 'Balma', email: 'hello@balma.co' },
            to: [{ email: 'hello@balma.co' }],
            subject: 'Nouvel utilisateur',
            textContent: `Nouvel inscrit sur la liste d'attente :\n\nNom : ${name}\nEmail : ${email}`,
          }),
        });
        if (!brevoResponse.ok) {
          const brevoError = await brevoResponse.text();
          console.error('Brevo API error:', brevoResponse.status, brevoError);
        }
      } catch (emailError) {
        console.error('Brevo email error:', emailError);
      }
    } else {
      console.error('BREVO_API_KEY is not set');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Added to waitlist' }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500, headers }
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
