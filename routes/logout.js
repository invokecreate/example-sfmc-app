const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Clear the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error('Failed to destroy session:', err);
      res.status(500).send('Failed to logout');
    } else {
      // Redirect the user to a logged-out state or relevant page
      res.redirect('/login');
    }
  });
});
module.exports = router;