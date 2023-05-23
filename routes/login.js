const express = require('express');
const router = express.Router();

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirectUri = process.env.redirectUri;
const subdomain = process.env.subdomain;

router.get('/', (req, res) => {
    console.log('Redirecting to Salesforce login page');
    const authorizationUrl = `https://${subdomain}.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    res.redirect(authorizationUrl);
});

module.exports = router;