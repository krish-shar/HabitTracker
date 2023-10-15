import React, { useState } from "react";

Quiz:
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      question: "Age:",
      options: ["18-26", "27-40", "41-60","61+"],
      answer: "",
    },
    {
      question: "Gender:",
      options: ["Male", "Female", "Nonbinary"],
      answer: "",
    },
    {
      question: "Current level of physical fitness:",
      options: ["Very fit", "Moderately fit", "Not fit"],
      answer: "",
    },
    {
      question: "Types of physical activities I enjoy:",
      options: ["Yoga", "Running", "Swimming", "Weightlifting", "Dancing"],
      answer: "",
    },
    {
      question: "Average hours of sleep per night:",
      options: ["6 hours or less", "7-8 hours", "9 hours or more"],
      answer: "",
    },
    {
      question: "Typical daily routine:",
      options: ["Early riser", "Night owl", "Regular 9 to 5", "Variable schedule"],
      answer: "",
    },
    {
      question: "Preferred methods of mental exercise/relaxation:",
      options: ["Meditation", "Reading", "Journaling", "Art"],
      answer: "",
    },
    {
      question: "Organization/time management struggles:",
      options: ["Procrastination", "Time management", "Organization"],
      answer: "",
    },
    {
      question: "Long-term aspirations and dreams:",
      options: ["Travel the world", "Career achievements", "Personal growth"],
      answer: "",
    },
  ]);

  const [answers, setAnswers] = useState({});

  const handleSelectOption = (question: QuizQuestion, selectedOption: string) => {
    setAnswers((prevAnswers) => {
      return { ...prevAnswers, [question.question]: selectedOption };
    });
  };

  const handleSubmit = () => {
    if (Object.values(answers).some((answer) => answer === "")) {
      alert("Please answer all questions.");
    } else {
      alert("Generating your Personalized Plan now...");
    }
  };

  return (
    <div className="quiz" style={{ backgroundColor: "#326245" }}>
      <h1 style={{ color: "#fff" }}>Quiz</h1>

      <div style={{ border: "1px solid #fff", padding: "10px", overflowY: "scroll", maxHeight: "500px" }}>
        {questions.map((question, index) => (
          <div className="quiz-question" key={index}>
            <p style={{ color: "#fff" }}>{question.question}</p>
            <div>
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} style={{ color: "#fff", display: "block" }}>
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={option}
                    checked={answers[question.question] === option}
                    onChange={() => handleSelectOption(question, option)}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        style={{ backgroundColor: "#fff", color: "#326245", borderRadius: "5px", padding: "10px", margin: "5px 0" }}
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;