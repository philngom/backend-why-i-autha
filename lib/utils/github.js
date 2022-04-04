const fetch = require('cross-fetch');

const exchangeCodeForToken = async (code) => {
  // TODO: Implement me!
  const resp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    }),
  });

  const { access_token } = await resp.json();

  return access_token;
};

const getGithubProfile = async (token) => {
  // TODO: Implement me!
  const resp = await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
    },
  });

  return await resp.json();
};

module.exports = { exchangeCodeForToken, getGithubProfile };
