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

// _mock chart data
const data = [
  { name: "January", Total: 1284 },
  { name: "February", Total: 2148 },
  { name: "March", Total: 812 },
  { name: "April", Total: 1629 },
  { name: "May", Total: 917 },
  { name: "June", Total: 1766 },
];

const Chart = () => {
  return (
    <div className="flex-[4] rounded-md p-[10px] shadow-3xl">
      <h1 className="mb-5 font-medium text-gray-500">
        Total 6 Months (Revenue)
      </h1>

      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="total"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              color="rgb(147,51,234)"
            >
              <stop offset="5%" stopColor="rgb(147,51,234)" stopOpacity={0.8} />
              <stop offset="98%" stopColor="rgb(147,51,234)" stopOpacity={0} />
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
  );
};

export default Chart;
