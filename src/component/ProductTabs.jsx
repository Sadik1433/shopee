import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full max-w-[800px] min-h-[180px] h-auto mt-12 sm:mt-16 px-2 sm:px-4 mb-10">
      <div className="flex gap-4 sm:gap-6 border-b border-[var(--border-color)] overflow-x-auto pb-1">
        {["description", "specifications", "sizeguide"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize font-semibold text-sm sm:text-base transition whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-teal-600 text-teal-600"
                : "text-[var(--text-secondary)] hover:text-[var(--text-color)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-5 text-[var(--text-color)] text-sm sm:text-base leading-relaxed">
        {activeTab === "description" && (
          <p className="text-[var(--text-secondary)]">
            These men's black printed pants are made from premium cotton blend
            fabric. Designed for comfort and style, perfect for formal and
            casual wear.
          </p>
        )}

        {activeTab === "specifications" && (
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-color)]">Material:</strong> Cotton Blend</li>
            <li><strong className="text-[var(--text-color)]">Fit:</strong> Slim Fit</li>
            <li><strong className="text-[var(--text-color)]">Pattern:</strong> Printed</li>
            <li><strong className="text-[var(--text-color)]">Care:</strong> Machine Wash</li>
          </ul>
        )}

        {activeTab === "sizeguide" && (
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide rounded-xl border border-[var(--border-color)]">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[var(--input-color)] text-[var(--text-color)]">
                  <th className="p-3 font-bold border-b border-[var(--border-color)]">Size</th>
                  <th className="p-3 font-bold border-b border-[var(--border-color)]">Waist</th>
                  <th className="p-3 font-bold border-b border-[var(--border-color)]">Length</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border-color)]">
                  <td className="p-3 font-medium">S</td>
                  <td className="p-3">28</td>
                  <td className="p-3">40</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">M</td>
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
