"use client";

import { ScatterChart } from "@tremor/react";

export default function CardUserAction() {
  const chartdata2 = [
    {
      location: "Location A",
      x: 18,
      y: 30,
      z: 100,
    },
    {
      location: "Location A",
      x: 9,
      y: 10,
      z: 100,
    },
    {
      location: "Location A",
      x: 10,
      y: 20,
      z: 100,
    },
    {
      location: "Location A",
      x: 21,
      y: 60,
      z: 100,
    },
    {
      location: "Location A",
      x: 10,
      y: 30,
      z: 100,
    },
    {
      location: "Location A",
      x: 10,
      y: 50,
      z: 100,
    },
    {
      location: "Location A",
      x: 8.5,
      y: 30,
      z: 100,
    },
    {
      location: "Location A",
      x: 8.5,
      y: 15,
      z: 100,
    },
    {
      location: "Location A",
      x: 8.7,
      y: 15,
      z: 100,
    },
    {
      location: "Location A",
      x: 9.2,
      y: 15,
      z: 100,
    },
    {
      location: "Location A",
      x: 9.6,
      y: 15,
      z: 100,
    },
    {
      location: "Location A",
      x: 10.8,
      y: 15,
      z: 100,
    },
  ];

  const customTooltip = ({ payload, active, label }: { payload: any; active: any; label: any }) => {
    if (!active || !payload) return null;
    return (
      <div className="w-48 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
        <div className="flex flex-1 space-x-2.5">
          <div className={`w-1.5 flex flex-col bg-${payload[0]?.color}-500 rounded`} />
          <div className="w-full">
            <p className="mb-2 font-medium text-tremor-content-emphasis">{label}</p>
            {payload.map((payloadItem: any, index: any) => (
              <div key={index} className="flex items-center justify-between space-x-6">
                <span className="text-tremor-content">{payloadItem.name}</span>
                <span className="font-medium tabular-nums text-tremor-content-emphasis">{payloadItem.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[800px] w-full">
      <div className="mb-4">
        <p className="font-[14px] text-gray-500">Active Hours (November 19 to November 25, 2023)</p>
      </div>
      <ScatterChart
        className="h-80"
        yAxisWidth={50}
        data={chartdata2}
        category="location"
        x="x"
        y="y"
        size="z"
        sizeRange={[1, 100]}
        colors={["violet", "purple"]}
        minXValue={0}
        maxXValue={24}
        minYValue={0}
        maxYValue={120}
        showAnimation
        showLegend={false}
        customTooltip={customTooltip}
        valueFormatter={{ x: (x) => `${x}h`, y: (y) => `${y}min` }}
      />
    </div>
  );
}
