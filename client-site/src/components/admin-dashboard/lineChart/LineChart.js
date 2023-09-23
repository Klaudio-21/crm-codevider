import React from "react"
import './LineChart.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const AdmLineChart = () => {
   
    return (
        <div className="chart-one-container">
            <p className="chart-title">DEPARTMENTS AND EMPLOYEES</p>
            {/*}
            <LineChart
                width={300}
                height={300}
                data={null}
                margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
                <XAxis
                    dataKey="name"
                    label={{
                        value: "Deapartment",
                        position: "insideBottom",
                        offset: -15,
                    }}
                />
                <YAxis
                    label={{
                        value: "Employees",
                        angle: -90,
                        position: "insideLeft",
                        offset: 10,
                    }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip
                    labelStyle={{ textAlign: "center" }}
                    contentStyle={{ color: "black", backgroundColor: "#F4F4F4" }}
                    itemStyle={{ color: "black" }}
                   
                />
                <Legend />
                <Line dataKey="count" stroke="blue" legendType="none" />
            </LineChart>
                {*/}
        </div>
    )
}

export default AdmLineChart;
