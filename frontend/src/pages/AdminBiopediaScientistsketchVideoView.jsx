import SampleVideo from "../assets/Video/SampleVideo.mp4";
export default function AdminBiopediaScientistsketchVideoView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Scientist Sketch Video View
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Video ID</th>
              <th className="px-4 py-2 border">Video Title</th>
              <th className="px-4 py-2 border">Video Description</th>
              <th className="px-4 py-2 border">Video</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">VIDEO !@#</td>
              <td className="px-4 py-2 border">
                Science Fair ljsdh sdjvskjdnvksdv sjkdvhaklsdbvuaysgv
              </td>
              <td className="px-4 py-2 border">
                <video
                  src={SampleVideo}
                  controls
                  autoPlay={true}
                  loop
                  muted
                  alt="Scientist Sketch Video"
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
