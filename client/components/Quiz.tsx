Quiz:
import React, { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      question: "Top three personal/professional goals for the next year:",
      options: ["Career advancement", "Health improvement", "Learning new skills"],
      answer: "",
    },
    {
      question: "Current level of physical fitness:",
      options: ["Very fit", "Moderately fit", "Not fit"],
      answer: "",
    },
    {
      question: "Types of physical activities I enjoy:",
      options: ["Yoga", "Running", "Swimming", "Weightlifting", "Dancing", "Other"],
      answer: "",
    },
    {
      question: "Any physical limitations or health conditions:",
      options: ["No limitations/conditions", "Asthma", "Arthritis", "Injury recovery", "Other"],
      answer: "",
    },
    {
      question: "Average hours of sleep and sleep-related concerns:",
      options: ["6 hours or less", "7-8 hours", "9 hours or more", "Insomnia", "Other"],
      answer: "",
    },
    {
      question: "Typical daily routine:",
      options: ["Early riser", "Night owl", "Regular 9 to 5", "Variable schedule", "Other"],
      answer: "",
    },
    {
      question: "Specific mental challenges/goals:",
      options: ["Stress management", "Focus and concentration", "Mood regulation", "Anxiety", "Other"],
      answer: "",
    },
    {
      question: "Preferred methods of mental exercise/relaxation:",
      options: ["Meditation", "Reading", "Journaling", "Art", "Other"],
      answer: "",
    },
    {
      question: "Dietary restrictions/preferences:",
      options: ["Vegetarian", "Vegan", "Gluten-free", "None", "Other"],
      answer: "",
    },
    {
      question: "Time constraints/scheduling challenges:",
      options: ["Busy work schedule", "Family commitments", "School/Study", "Other"],
      answer: "",
    },
    {
      question: "Motivation and tracking strategies:",
      options: ["Setting goals", "Accountability partner", "Rewards", "Other"],
      answer: "",
    },
    {
      question: "Organization/time management struggles:",
      options: ["Procrastination", "Time management", "Organization", "Other"],
      answer: "",
    },
    {
      question: "Supportive resources/individuals:",
      options: ["Family", "Friends", "Online communities", "Therapist/counselor", "Other"],
      answer: "",
    },
    {
      question: "Past successes and challenges:",
      options: ["Achieved goals", "Overcame obstacles", "Setbacks", "Other"],
      answer: "",
    },
    {
      question: "Long-term aspirations and dreams:",
      options: ["Travel the world", "Career achievements", "Personal growth", "Other"],
      answer: "",
    },
  ]);

  const [answers, setAnswers] = useState<QuizAnswers>({});

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