"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "@tremor/react";

export default function CardSales() {
  const chartdata3 = [
    {
      date: "11/19",
      sales: 0,
    },
    {
      date: "11/20",
      sales: 50000,
    },
    {
      date: "11/21",
      sales: 100000,
    },
    {
      date: "11/22",
      sales: 10000,
    },
    {
      date: "11/23",
      sales: 0,
    },
    {
      date: "11/24",
      sales: 0,
    },
    {
      date: "11/25",
      sales: 75000,
    },
  ];

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardDescription className="text-[13px] text-gray-500">This week's total sales</CardDescription>
          <CardTitle className="text-[28px] font-normal tracking-wider">￥ 240,000</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-8">
            <LineChart
              className="h-72 max-w-[700px] w-full"
              data={chartdata3}
              index="date"
              categories={["sales"]}
              colors={["violet"]}
              yAxisWidth={50}
              minValue={0}
              maxValue={240000}
            />
            <div className="max-w-[300px] w-full flex flex-col">
              <div className="border-b-[1px] mb-4 pb-2">
                <p className="text-[13px] text-gray-400">3rd department</p>
                <p className="text-[21px] tracking-wider">￥ 10,000</p>
              </div>
              <div className="border-b-[1px] mb-4 pb-2">
                <p className="text-[13px] text-gray-400">2nd department</p>
                <p className="text-[21px] tracking-wider">￥ 10,000</p>
              </div>
              <div className="border-b-[1px] mb-4 pb-2">
                <p className="text-[13px] text-gray-400">1st department</p>
                <p className="text-[21px] tracking-wider">￥ 10,000</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
