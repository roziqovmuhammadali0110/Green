import React from "react";

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Ma'lumot mavjud emas!</p>;
  }

  // Ustun nomlarini olish
  const headers = Object.keys(data[0]).filter(
    (key) => key.endsWith("Uz") || (!key.endsWith("Ru") && key !== "id")
  );

  return (
    <div className="overflow-x-auto pb-5">
      <table className="min-w-[600px] w-full text-white border-2 mx-2">
        <thead className="border-2 bg-green-800">
          <tr className="border-2">
            <th className="border-2 px-2 py-1">№</th>
            {headers.map((header, index) => (
              <th key={index} className="border-2 px-2 py-1 capitalize">
                {header.replace("Uz", "")} {/* "Uz" so‘zini olib tashlash */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-2">
              <td className="border-2 px-2 py-1 text-center">{rowIndex + 1}</td>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="border-2 px-2 py-1 text-center">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
