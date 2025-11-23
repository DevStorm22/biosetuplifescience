export default function BiopediaQuiz() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-10">
      <h1 className="text-5xl font-bold text-[#00A6F5]">Biopedia Quiz</h1>

      {/* Simple Grid Cards */}
      <div className="flex flex-row flex-wrap justify-center gap-6 p-5">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="border p-5 rounded-lg w-72 flex flex-col items-center gap-4"
            >
              <h2 className="text-2xl font-semibold text-center">
                Quiz Title {i + 1}
              </h2>

              <p className="text-center text-base">
                This is quiz description. This is quiz description. This is quiz
                description.
              </p>

              <button className="bg-[#00A6F5] text-white px-4 py-2 rounded-md">
                Play Quiz
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
