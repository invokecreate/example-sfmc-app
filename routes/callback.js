const express = require('express');
const axios = require('axios');
const qs = require('querystring');
const router = express.Router();

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirectUri = process.env.redirectUri;
const subdomain = process.env.subdomain;

router.get('/', async (req, res) => {
    console.log('Handling callback from Salesforce');
    const code = req.query.code;

    const requestBody = {
        grant_type: 'authorization_code',
        code: code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const response = await axios.post(`https://${subdomain}.auth.marketingcloudapis.com/v2/token`, qs.stringify(requestBody), config);
        req.session.accessToken = response.data.access_token;
        console.log('Access token stored in session:', req.session.accessToken);
        res.redirect('/');
    } catch (error) {
        console.error('Failed to exchange code for access token', error);
        res.status(500).send('Failed to exchange code for access token');
    }
});

module.exports = router;