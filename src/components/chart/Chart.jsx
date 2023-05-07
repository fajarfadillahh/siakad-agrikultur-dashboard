import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// import chart data
import data from "../../_mock/ChartData";

const Chart = () => {
  return (
    <div className="flex-1 rounded-md border border-gray-100 p-4 shadow-3xl">
      <div className="grid gap-4">
        <h1 className="font-medium text-gray-500">
          Total 6 Months (Active Users)
        </h1>

        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="total"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                color="rgb(147,51,234)"
              >
                <stop
                  offset="5%"
                  stopColor="rgb(147,51,234)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="98%"
                  stopColor="rgb(147,51,234)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" className="stroke-gray-300" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="rgb(147,51,234)"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
