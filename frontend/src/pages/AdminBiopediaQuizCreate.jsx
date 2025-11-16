export default function AdminBiopediaQuizCreate() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Quiz Create Page
      </h1>
      <p className="text-lg">
        This is where you can create a new Biopedia Quiz entry.
      </p>
      <div className="bg-white shadow-2xl rounded p-10 mb-4 w-auto">
        <form className="space-y-4">
          <div className="mb-4 flex flex-col justify-center items-center gap-5">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-md font-bold mb-2 text-[#00A6F5]"
                htmlFor="quiz-title"
              >
                Title of the Quiz
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quiz-title-input"
                name="quiz-title-input"
                type="text"
                placeholder="Enter the quiz title"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-md font-bold mb-2 text-[#00A6F5]"
                htmlFor="quiz-description"
              >
                Description of the Quiz
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quiz-description-input"
                name="quiz-description-input"
                type="text"
                placeholder="Enter the quiz description"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-center items-center gap-30">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question1"
              >
                Question 1
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question1"
                name="question1"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 2
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question2"
                name="question2"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-center items-center gap-30">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 3
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question3"
                name="question3"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 4
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question4"
                name="question4"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-center items-center gap-30">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 5
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question5"
                name="question5"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 6
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question6"
                name="question6"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-center items-center gap-30">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 7
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question7"
                name="question7"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 8
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question8"
                name="question8"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-center items-center gap-30">
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 9
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question9"
                name="question9"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
            <div className="mb-4 gap-2 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question 10
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question10"
                name="question10"
                type="text"
                placeholder="Enter the quiz question"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option1"
                name="option1"
                type="text"
                placeholder="Enter option 1 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option2"
                name="option2"
                type="text"
                placeholder="Enter option 2 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option3"
                name="option3"
                type="text"
                placeholder="Enter option 3 for the question"
                required
              />
              <input
                className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="option4"
                name="option4"
                type="text"
                placeholder="Enter option 4 for the question"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#00A6F5] hover:bg-[#0b81cb] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
