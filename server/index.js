const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Sử dụng cors

app.post('/api/chatbot', (req, res) => {
  const userMessage = req.body.message;
  const botReply = `Bạn vừa nói: "${userMessage}"`;
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
