import React from "react"
import './ProjectsPie.css';
import ApexCharts from "react-apexcharts";

const ProjectsPieChart = () => {

    return (
        <div className="employee-ring-chart-container">
            <p className="employee-ring-chart-title">PROJECT STATUS</p>
            <div className="apex-chart">
                {/*}
                <ApexCharts
                    options={{
                        plotOptions: {
                            pie: {
                                expandOnClick: false,
                            },
                        },
                        dataLabels: {
                            enabled: true,
                        },
                        responsive: [
                            {
                                options: {
                                    chart: {
                                        width: 200,
                                    },
                                    legend: {
                                        show: true,
                                    },
                                },
                            },
                        ],
                        legend: {
                            position: "right",
                            offsetY: 0,
                            height: 230,
                            onItemHover: {
                                highlightDataSeries: false,
                            },
                            onItemClick: {
                                toggleDataSeries: false,
                            },
                        },


                        colors: ["#FF0000", "#FFC000", "#33FF57"],
                    }}

                    type="donut"
                    width={355}
                />
                {*/}
            </div>
        </div>
    )
}

export default ProjectsPieChart;
