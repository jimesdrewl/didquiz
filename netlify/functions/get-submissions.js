exports.handler = async (event, context) => {
  // Add authentication check here
  
  try {
    const response = await fetch(`https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/submissions`, {
      headers: {
        'Authorization': `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`
      }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
