import { SUPPORTED_GPUS } from "@/constants";

const GPUSTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">GPU Model</th>
            <th className="border border-gray-300 px-4 py-2">
              Tested Transcoding
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Tested Concurrent Ethash Mining
            </th>
            <th className="border border-gray-300 px-4 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {SUPPORTED_GPUS.map((gpu, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{gpu.model}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {gpu.transcoding ? "✅" : ""}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {gpu.ethashMining ? "✅" : ""}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {gpu.noteLink ? (
                  <a
                    href={gpu.noteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {gpu.notes}
                  </a>
                ) : (
                  gpu.notes
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GPUSTable;
