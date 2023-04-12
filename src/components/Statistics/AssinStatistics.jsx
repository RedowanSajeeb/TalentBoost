import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

  const assignments = [
    {
      name: "A1",
      score: 60,
      avgMark: 60,
      topPositions:59,
    },
    {
      name: "A2",
      score: 60,
      avgMark: 60,
      topPositions: 40,
    },
    {
      name: "A3",
      score: 60,
      avgMark: 60,
      topPositions: 55,
    },
    {
      name: "A4",
      score: 60,
      avgMark: 60,
      topPositions: 40,
    },
    {
      name: "A5",
      score: 60,
      avgMark: 60,
      topPositions: 7,
    },
    {
      name: "A6",
      score: 60,
      avgMark: 60,
      topPositions: 20,
    },
    {
      name: "A7",
      score: 60,
      avgMark: 60,
      topPositions: 4,
    },
    {
      name: "A8",
      score: 60,
      avgMark: 60,
      topPositions: 8,
    },
  ];
    
const AssinStatistics = () => {
    return (
      <div className="side-container overflow-hidden">
        <h1 className='text-2xl mt-10 md:ms-10'>Assignment Analytics</h1>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={assignments}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="score"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="score" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="avgMark" stroke="#ff7300" />
              {/* <Scatter dataKey="topPositions" fill="red" /> */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default AssinStatistics;