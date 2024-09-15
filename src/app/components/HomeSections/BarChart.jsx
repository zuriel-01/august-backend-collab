'use client';

import Link from "next/link";
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
                                "rgb(255, 159, 64, 0.2)",
                                "rgb(255, 205, 86, 0.2)",
                                "rgb(75, 192, 192, 0.2)",
                                "rgb(54, 162, 235, 0.2)",
                                "rgb(153, 102, 255, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
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
        <>
            <section className="relative w-[60vw] h-[60vh]">
                <canvas ref={chartRef} />
            </section>
        </>
    );
};

export default BarChart;
