"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@tremor/react";

export default function CardUser() {
  const chartdata = [
    {
      name: "3rd",
      user: 4,
    },
    {
      name: "2nd",
      user: 3,
    },
    {
      name: "1st",
      user: 1,
    },
  ];

  const valueFormatter = (number: number) => new Intl.NumberFormat("us").format(number).toString();
  return (
    <div className="max-w-[500px] w-full">
      <Card>
        <CardHeader>
          <CardDescription className="text-[13px] text-gray-500">this week's new user acquisitions</CardDescription>
          <CardTitle className="text-[28px] font-normal tracking-wider">8</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            className="h-72 w-full"
            data={chartdata}
            index="name"
            categories={["user"]}
            colors={["violet"]}
            valueFormatter={valueFormatter}
            yAxisWidth={56}
            minValue={0}
            maxValue={20}
            showAnimation
          />
        </CardContent>
      </Card>
    </div>
  );
}
