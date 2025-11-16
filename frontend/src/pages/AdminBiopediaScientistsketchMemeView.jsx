import SampleImage from "../assets/images/BIO.png";
export default function AdminBiopediaScientistsketchMemeView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Scientist Sketch Meme View
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Meme ID</th>
              <th className="px-4 py-2 border">Meme Title</th>
              <th className="px-4 py-2 border">Meme Description</th>
              <th className="px-4 py-2 border">Meme</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">MEME !@#</td>
              <td className="px-4 py-2 border">
                Science Fair ljsdh sdjvskjdnvksdv sjkdvhaklsdbvuaysgv
              </td>
              <td className="px-4 py-2 border">
                <img
                  src={SampleImage}
                  alt="Scientist Sketch Meme"
                  className="max-w-full h-auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
