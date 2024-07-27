const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  // Your chatbot logic here
  res.json({ reply: `You said: ${message}` });
});

module.exports = router;
