import "../Analysis/Analysis.css"
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import DataJson from "../ListData/Data/Data.json";
import {useState, useEffect} from 'react';


const COLORS = ["#eba2a2", "#3dba84", "#34b3c7"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Analysis() {

  const url = 'http://localhost:3001/users/all';

  const [state, setstate] = useState(null)
  const getData = () =>
      fetch(url)
          .then((res) => res.json())

  useEffect(() => {
      getData().then((state) => setstate(state))

  }, [])
  
  const data01 = {state};

  function countSex(datajson) {
    var countMale = 0;
    var countFemale = 0;
    var countOther = 0;
    console.log(datajson[1]);
    for (var i = 0; i < datajson.length; i++) {
      if (datajson[i].Sex === "Nam")
        countMale++;
      else {
        if (datajson[i].Sex === "Nữ") {
          countFemale++;
        } else {
          countOther++;
        }
      }

    }
    return [{ name: "Nữ", value: countFemale }, { name: "Nam", value: countMale }, { name: "other", value: countOther }];
  }

  const data = countSex(data01);

  return (
    <div className="mooo">
      <h3>hello</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          isAnimationActive={false}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

  );
}


