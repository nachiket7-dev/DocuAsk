import React, { useState } from 'react';

function QuestionAnswer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const requestBody = {
        "prompt": {
          "text": question
        },
        "temperature": 0.2,
        "maxOutputTokens": 256
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      const aiAnswer = data.candidates && data.candidates.length > 0 ? data.candidates[0].content : JSON.stringify(data);
      setAnswer(aiAnswer);
    } catch (error) {
      setAnswer(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question-answer">
      <h3>Ask a Question</h3>
      <textarea
        rows="3"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about your documents..."
        disabled={loading}
      />
      <br />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? 'Asking...' : 'Ask'}
      </button>
      {answer && (
        <div className="answer">
          <h4>Answer:</h4>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionAnswer;
