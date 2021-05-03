import { Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";

const NaturalizationTest_Easy = () => {
  const questions = [
    {
      questionText: "What is the supreme law of the land?",
      answerOptions: [
        { answerText: "The Declaration of Indepencence", isCorrect: false },
        { answerText: "The Magna Carta", isCorrect: false },
        { answerText: "The Constitution", isCorrect: true },
      ],
    },
    {
      questionText: "What does the Constitution do?",
      answerOptions: [
        {
          answerText:
            "Sets up the government, defines the government, and protects the basic rights of Americans.",
          isCorrect: true,
        },
        {
          answerText:
            "Establishes the country's offical religion and language, and duties required of Americans to the government.",
          isCorrect: false,
        },
        {
          answerText:
            "Articlates the supremacy of the federal government, consolidates all governmental authority within the Executive Branch, and abolishes the private ownership of exterprises and property.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "The idea of self-government is in the first three words of the Constitution. What are these words?",
      answerOptions: [
        { answerText: "All for One", isCorrect: false },
        { answerText: "We the People", isCorrect: true },
        { answerText: "Believe, Obey, Fight", isCorrect: false },
      ],
    },
    {
      questionText: "What is an amendment?",
      answerOptions: [
        {
          answerText:
            "A directive from the President that manages operations of the federal government.",
          isCorrect: false,
        },
        {
          answerText:
            "An informal term for legislation passed by Congress and approved by the President.",
          isCorrect: false,
        },
        {
          answerText: "A change or addition to the Constitution.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "What do we call the first ten amendments to the Constitution?",
      answerOptions: [
        { answerText: "The Bill of Rights", isCorrect: true },
        { answerText: "The Rights of Man", isCorrect: false },
        { answerText: "The Articles of Confederation", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is the First Amendment?",
      answerOptions: [
        {
          answerText:
            "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
          isCorrect: true,
        },
        {
          answerText:
            "A well-regulated militia, being necessary to the security of a free state, the right of the people to keep and bear arms, shall not be infringed.",
          isCorrect: false,
        },
        {
          answerText:
            "The powers not delegated to the United States by the Constitution, nor prohibited by it to the states, are reserved to the states respectively, or to the people.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "How many amendments does the Constitution have?",
      answerOptions: [
        { answerText: "27", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "69", isCorrect: false },
      ],
    },
    {
      questionText: "What did the Declaration of Independence do?",
      answerOptions: [
        {
          answerText:
            "Called for the forcible overthrow of all existing social conditions.",
          isCorrect: false,
        },
        {
          answerText: "Announced our indepence from Great Britain.",
          isCorrect: true,
        },
        {
          answerText: "Called for the abolition of the State.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What are two rights in the Declaration of Independence",
      answerOptions: [
        {
          answerText: "A universal, basic income and guaranteed employment.",
          isCorrect: false,
        },
        { answerText: "Housing and food.", isCorrect: false },
        { answerText: "Life and Liberty.", isCorrect: true },
      ],
    },
    {
      questionText: "What is freedom of religion?",
      answerOptions: [
        {
          answerText:
            "The right to pass laws that promote your religion above all others.",
          isCorrect: false,
        },
        {
          answerText:
            "The right for religious institutions to be exempt from the federal income tax.",
          isCorrect: false,
        },
        {
          answerText: "The right to, or not to, practice any religion.",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, hiddenAnswer] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="container">
            <h1>USCIS Naturalization Test - Easy</h1>
            {showScore ? (
              <p>
                You scored {score} out of {questions.length}.&nbsp;
                <span
                  className="link"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Take the test again?
                </span>
              </p>
            ) : (
              <>
                <h2>
                  Question {currentQuestion + 1}/{questions.length}
                </h2>
                <p>{questions[currentQuestion].questionText}</p>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="button"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NaturalizationTest_Easy;
