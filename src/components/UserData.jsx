import { useEffect } from "react"
import * as d3 from 'd3'

export default function UserData() {

    useEffect(() => {
        
        // Select the existing SVG and remove it
        const existingSVG = d3.select('#progress').select('svg');
        if (!existingSVG.empty()) {
        existingSVG.remove();
        }

        
    const completionPercentage = 75;

    const svg = d3.select("#progress")
      .append("svg")
      .attr("width", 150)
      .attr("height", 150)
      .append("g")
      .attr("transform", "translate(75,75)");

    // Increase the radius for both completed and incomplete portions
    const arcCompleted = d3.arc()
      .innerRadius(60)  // Adjust the inner radius
      .outerRadius(75)  // Adjust the outer radius
      .startAngle(0)
      .cornerRadius(10);

    const arcIncomplete = d3.arc()
      .innerRadius(60)  // Adjust the inner radius
      .outerRadius(75)  // Adjust the outer radius
      .startAngle(Math.PI * 2 * (completionPercentage / 100))
      .cornerRadius(10);

    // Draw the completed portion
    svg.append("path")
      .datum({ endAngle: Math.PI * 2 })
      .style("fill", "#4caf50")
      .attr("d", arcCompleted);

    // Draw the incomplete portion
    svg.append("path")
      .datum({ endAngle: Math.PI * 2 })
      .style("fill", "#2196F3")
      .attr("d", arcIncomplete);

    // Display the completion percentage in the center
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#000")
      .text(`${completionPercentage}%`);
    }, []);

    return (
        <div className="w-1/5">
            <div className="flex flex-col gap-4">
                <div className="h-1/5">
                    <div className="mt-6">
                        <div className="flex gap-4 justify-end items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p>Faizan</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <h6 className="text-lg font-bold text-right mt-1">Welcome, Faizan</h6>
                        <p className="text-right text-xs">Good to see you again!</p>
                    </div>
                </div>
                <div className="h-[40vh] border-2 border-gray-400 rounded-md p-2">
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-center">Average Score</h4>
                        <div className="flex justify-evenly items-center mt-12">
                            <div id="progress"></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">75 %</p>
                                <p className="text-xs">About Graph</p>
                                <div className="flex items-center">
                                    <p className="text-xs text-blue-600 cursor-pointer">See Detail</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-2/5 border-2 border-gray-400 rounded-md p-2">
                    <h4 className="text-xl font-bold text-center">Top 10 Focus Topics</h4>
                    <div className="flex flex-col gap-[0.125rem]">
                        <div className="flex justify-between text-xs mt-4">
                            <p>1. Focus Topic 1</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>2. Focus Topic 2</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>3. Focus Topic 3</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>4. Focus Topic 4</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>5. Focus Topic 5</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>6. Focus Topic 6</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>7. Focus Topic 7</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>8. Focus Topic 8</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>9. Focus Topic 9</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <p>10. Focus Topic 10</p>
                            <div className="text-xs text-white bg-blue-500 p-1 rounded-full">Score 1</div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm text-blue-600 cursor-pointer">See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}