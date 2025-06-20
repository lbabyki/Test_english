import React from "react";

export default function EnglishTestApp() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        English Pronunciation & Grammar Test
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-500">
          Pronunciation Practice
        </h2>
        <p className="mt-2">
          Ask the student to pronounce the following words:
        </p>
        <ul className="list-disc list-inside mt-2">
          {[
            "apple",
            "school",
            "water",
            "computer",
            "restaurant",
            "beautiful",
            "vegetable",
            "comfortable",
            "focus",
            "development",
          ].map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-500">
          Part 1: Reading Comprehension (5 points)
        </h2>
        <p className="mt-2">
          <strong>Passage:</strong> Anna is a student at a university in London.
          She usually wakes up at 7 a.m., takes the bus to school, and attends
          classes from 9 a.m. to 3 p.m. After school, she studies in the library
          or meets her friends at a café. On weekends, she enjoys visiting
          museums and watching movies.
        </p>
        <div className="mt-4 space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="">
              {i + 1}. <input type="text" className="border p-1 w-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-500">
          Part 2: Grammar (5 points)
        </h2>
        {[
          {
            question: "She ___ to the store every morning.",
            options: ["go", "goes", "going", "gone"],
          },
          {
            question: "I ___ seen that movie before.",
            options: ["have", "has", "had", "was"],
          },
          {
            question: "If it ___ tomorrow, we will cancel the trip.",
            options: ["rain", "will rain", "rains", "raining"],
          },
          {
            question: "They ___ dinner when I arrived.",
            options: ["had", "have", "were having", "are having"],
          },
          {
            question: "This book is ___ than that one.",
            options: ["good", "better", "best", "more better"],
          },
        ].map((q, i) => (
          <div key={i} className="mb-4">
            <div>
              {i + 1}. {q.question}
            </div>
            <div className="ml-4">
              {q.options.map((opt, j) => (
                <div key={j}>
                  <label>
                    <input type="radio" name={`q${i}`} className="mr-2" />{" "}
                    {String.fromCharCode(97 + j)}. {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-500">
          Part 3: Vocabulary (3 points)
        </h2>
        <table className="w-full border mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">A</th>
              <th className="border p-2">B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1. Delicious</td>
              <td className="border p-2">
                a. <input type="text" className="border p-1 w-full" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">2. Expensive</td>
              <td className="border p-2">
                b. <input type="text" className="border p-1 w-full" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">3. Hilarious</td>
              <td className="border p-2">
                c. <input type="text" className="border p-1 w-full" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-500">
          Part 4: Logical Thinking (2 points)
        </h2>
        <p className="mt-2">
          A farmer has 10 cows. All but 4 run away. How many cows does he have
          now?
        </p>
        <input type="text" className="border p-1 mt-2 w-full" />
      </section>
    </div>
  );
}
