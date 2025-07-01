import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CORE backend is live!');
});

app.post('/', (req, res) => {
  const userMessage = req.body.message || '';
  const reply = `You said: ${userMessage}`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
