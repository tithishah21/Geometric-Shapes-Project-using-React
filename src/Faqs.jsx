import React, { useState } from 'react';
import './faqs.css';
import { FaCaretDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How can I subscribe to updates?",
    answer: "You can subscribe to updates by signing up with your email on our homepage."
  },
  {
    question: "What is the course duration?",
    answer: "The course duration varies but typically lasts 6 to 12 weeks, depending on the topic."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support via email at support@example.com or through our 24/7 live chat."
  },
  {
    question: "Can I access the content offline?",
    answer: "Yes! You can download materials for offline access after enrolling in the course."
  },
  {
    question: "Are there assessments or tests included?",
    answer: "Yes, every course includes quizzes and assessments to track your progress."
  },
  {
    question: "How do I request additional resources?",
    answer: "You can request additional resources through our 'Request Resources' section in the dashboard."
  },
  {
    question: "What are the payment methods?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers for payments."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="main">
      <div className="bg">
        <div className="one"></div>
        <div className="two"></div>
      </div>
      <div className="box">
        <div className="head">Frequently Asked Questions</div>
        <br /><br /><hr />
        {faqs.map((faq, index) => (
          <div key={index}>
            <p className="p" onClick={() => toggleAnswer(index)}>
              <b>Q{index + 1}:</b> {faq.question}
              <FaCaretDown />
            </p>
            {openIndex === index && (
              <div className="answer">{faq.answer}</div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
