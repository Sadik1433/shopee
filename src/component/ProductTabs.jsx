import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="h-[200px] w-[800px] mt-16 px-4 mb-10">
      <div className="flex gap-6 border-b">
        {["description", "specifications", "sizeguide"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-teal-600 text-teal-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 text-gray-700 leading-relaxed">
        {activeTab === "description" && (
          <p>
            These men's black printed pants are made from premium cotton blend
            fabric. Designed for comfort and style, perfect for formal and
            casual wear.
          </p>
        )}

        {activeTab === "specifications" && (
          <ul className="space-y-2">
            <li><strong>Material:</strong> Cotton Blend</li>
            <li><strong>Fit:</strong> Slim Fit</li>
            <li><strong>Pattern:</strong> Printed</li>
            <li><strong>Care:</strong> Machine Wash</li>
          </ul>
        )}

        {activeTab === "sizeguide" && (
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide ">
            <table className="w-full border text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Size</th>
                  <th className="p-3">Waist</th>
                  <th className="p-3">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">S</td>
                  <td className="p-3">28</td>
                  <td className="p-3">40</td>
                </tr>
                <tr>
                  <td className="p-3">M</td>
                  <td className="p-3">30</td>
                  <td className="p-3">41</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
