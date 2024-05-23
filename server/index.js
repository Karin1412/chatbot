const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Danh sách các từ khóa và câu trả lời về thú cưng
const faq = [
  { keywords: ["xin chào", "hello", "hi"], answer: "Xin chào bạn, mình là PetAI. Mình có thể giúp gì cho bạn?" },
  { keywords: ["chăm sóc chó", "nuôi chó"], answer: "Bạn nên cung cấp cho chú chó một chế độ ăn uống cân bằng, luyện tập thường xuyên, và thăm bác sĩ thú y định kỳ." },
  { keywords: ["tắm cho mèo", "tắm mèo"], answer: "Mèo không cần tắm thường xuyên như chó. Tuy nhiên, khi cần tắm, hãy sử dụng nước ấm và dầu gội chuyên dụng cho mèo." },
  { keywords: ["chó ăn sô cô la", "chó ăn socola", "sô cô la chó"], answer: "Không, sô cô la rất nguy hiểm cho chó và có thể gây ngộ độc." },
  { keywords: ["thức ăn tốt cho mèo", "mèo ăn gì", "thức ăn mèo"], answer: "Thức ăn khô và ướt đều có lợi cho mèo, nhưng bạn nên chọn những loại thức ăn chất lượng cao và phù hợp với độ tuổi và sức khỏe của mèo." },
  { keywords: ["huấn luyện chó con", "dạy chó con", "chó con"], answer: "Bạn nên bắt đầu với các lệnh cơ bản như 'ngồi', 'nằm', và 'đến đây'. Sử dụng phần thưởng và kiên nhẫn để giúp chó con học nhanh hơn." }
];

app.post('/api/chatbot', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let botReply = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Vui lòng thử lại hoặc hỏi câu khác về thú cưng.";

  // Tìm câu trả lời dựa trên từ khóa
  for (const item of faq) {
    if (item.keywords.some(keyword => userMessage.includes(keyword))) {
      botReply = item.answer;
      break;
    }
  }
  
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
