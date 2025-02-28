const Specs=()=>{

    const specifications = [

        { label: "CPU", value: "QCA9557" },
        { label: "CPU Nominal Frequency", value: "800 MHz" },
        { label: "CPU Core Count", value: "1" },
        { label: "Size of RAM", value: "128 MB" },
        { label: "10/100/1000 Ethernet Ports", value: "5" },
        { label: "PoE In", value: "Yes, passive" },
        { label: "Supported Input Voltage", value: "12 - 57 V" },
        { label: "Power Output", value: "On ports 2-5, Output: 1A max per port; 2A max total (12-30v), 450mA max per port; 1.8A max total (31-57v)" },
        { label: "PCB Temperature Monitor", value: "Yes" },
        { label: "Voltage Monitor", value: "Yes" },
        { label: "USB Slot", value: "Yes" },
        { label: "Dimensions", value: "114 x 137 x 29 mm" },
        { label: "License Level", value: "4" },
        { label: "Operating System", value: "RouterOS" },
        { label: "Max Power Consumption", value: "54 W" },
        { label: "Max Power Consumption (without attachments)", value: "3 W" },
      ];


    return(
       <div className="flex justify-center mt-10">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Specifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-700">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-blue-600 px-4 py-2 text-center">Specification</th>
                <th className="border border-blue-600 px-4 py-2 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index} className="border border-blue-600">
                  <td className="border border-blue-600 px-4 py-2">{spec.label}</td>
                  <td className="border border-blue-600 px-4 py-2">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Specs;