"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressCircle } from "@tremor/react";

export default function CardKPI() {
  return (
    <div className="max-w-[300px] w-full">
      <Card>
        <CardHeader>
          <CardDescription className="text-[13px] text-gray-500">KPI Achievement Rate</CardDescription>
          <CardTitle className="text-[28px] font-normal tracking-wider">50%</CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressCircle value={50} strokeWidth={12} size="lg" color={"violet"}>
            <span className="text-[16px] font-bold text-gray-700">50%</span>
          </ProgressCircle>
        </CardContent>
      </Card>
    </div>
  );
}
