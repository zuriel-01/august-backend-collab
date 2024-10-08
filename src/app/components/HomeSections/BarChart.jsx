'use client';


import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        let newChart;

        if (chartRef.current) {
            // Destroy the chart if it already exists
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const context = chartRef.current.getContext("2d");

            newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Income",
                            
                            data: [2500, 3100, 4000, 2800, 3500, 4100, 3000, 3800, 4500, 3100, 3900,4100, 5000],
                            backgroundColor: [
                                "rgb(14, 165, 233, 0.5)",
                                "rgb(255, 159, 64, 0.5)",
                                "rgb(255, 205, 86, 0.5)",
                                "rgb(75, 192, 192, 0.5)",
                                "rgb(54, 162, 235, 0.5)",
                                "rgb(153, 102, 255, 0.5)",
                                "rgb(50, 205, 50, 0.5)",
                                "rgb(255, 105, 180, 0.5)",
                                "rgb(0, 191, 255, 0.5)",
                                "rgb(139, 69, 19, 0.5)",
                                "rgb(127, 255, 212, 0.5)",
                                "rgb(148, 0, 211, 0.5)",
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(75, 192, 192)",
                                "rgb(54, 162, 235)",
                                "rgb(153, 102, 255)",
                                "rgb(201, 203, 207)",
                                "rgb(255, 99, 132)",
                                "rgb(255, 99, 132)",
                                "rgb(255, 99, 132)",
                                "rgb(255, 99, 132)",
                                "rgb(255, 99, 132)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "category",
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            chartRef.current.chart = newChart;
        }

        // Cleanup function to destroy chart on unmount
        return () => {
            if (newChart) {
                newChart.destroy();
            }
        };
    }, []);

    return (
        <div>
            <section className="relative  h-[70vh] bg-green pl-[10rem] bg-neutral-100 w-[100vw] px-[1rem] pb-10">
                <canvas ref={chartRef} />
            </section>
        </div>
    );
};

export default BarChart;
