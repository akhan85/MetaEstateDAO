export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  try {
    console.log('Initializing API call...');
    
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Replace with your actual list ID
        updateEnabled: true
      })
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to subscribe');
    }

    return res.status(200).json({ 
      message: 'Successfully subscribed to the project!' 
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      status: error.status,
      stack: error.stack
    });
    
    if (error.message === 'Contact already exist') {
      return res.status(400).json({ 
        message: 'This email is already subscribed!' 
      });
    }

    return res.status(500).json({ 
      message: 'Error subscribing to the project',
      details: error.message
    });
  }
}