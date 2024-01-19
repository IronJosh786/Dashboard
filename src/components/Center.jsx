import * as d3 from 'd3';
import { useEffect } from 'react';

export default function Center() {

    useEffect(() => {
        // Sample data for the scatter plot
        const data = [
          { time: '12:00 pm', value: 20, color: 'red' },
          { time: '12:05 pm', value: 40, color: 'blue' },
          { time: '12:10 pm', value: 60, color: 'green' },
          { time: '12:15 pm', value: 80, color: 'yellow' },
          { time: '12:20 pm', value: 50, color: 'pink' },
          { time: '12:25 pm', value: 30, color: 'red' },
          { time: '12:30 pm', value: 70, color: 'blue' },
          { time: '12:35 pm', value: 20, color: 'red' },
          { time: '12:40 pm', value: 40, color: 'blue' },
          { time: '12:45 pm', value: 60, color: 'green' },
          { time: '12:50 pm', value: 80, color: 'yellow' },
          { time: '12:55 pm', value: 50, color: 'blue' },
          { time: '01:00 pm', value: 100, color: 'blue' }
        ];
    
        // Set up the SVG container
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = 800 - margin.left - margin.right;
        const height = 250 - margin.top - margin.bottom;
    
        // Select the existing SVG and remove it
        const existingSVG = d3.select('#graph').select('svg');
        if (!existingSVG.empty()) {
        existingSVG.remove();
        }

        const svg = d3.select('#graph')
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
        // Parse time string to JavaScript Date object
        const parseTime = d3.timeParse('%I:%M %p');
    
        // Set the x and y scales
        const x = d3.scaleTime()
          .range([0, width])
          .domain(d3.extent(data, d => parseTime(d.time)));
    
        const y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, d3.max(data, d => d.value)]);
    
        // Add the x-axis
        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));
    
        // Add the y-axis
        svg.append('g')
          .call(d3.axisLeft(y));
    
        // Add the scatter plot points
        svg.selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr('cx', d => x(parseTime(d.time)))
          .attr('cy', d => y(d.value))
          .attr('r', 5) // radius of the circles
          .attr('fill', d => d.color); // color of the circles based on the 'color' property
          d3.select('#graph');
      }, []);

    return (
        <div className="w-3/5">
            <div className="w-11/12 mx-auto flex flex-col gap-4 mr-4">
                <div className="h-1/5 relative flex flex-col gap-2">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        className="w-full p-1 rounded-md border-2 border-gray-400 mt-6"
                        placeholder="Search your question here or ask TiiA"
                    />
                    <button className="absolute right-2 top-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                    </button>
                    <p className=" p-1 text-xs font-medium"><span className="text-sm text-blue-400 font-semibold">Current License:</span> USD/CAD AUD/USD</p>
                </div>
                <div className="h-[40vh] border-2 border-gray-400 rounded-md">
                    <div className="flex justify-between p-4">
                        <h2 className="text-2xl font-bold">News & Data Flow</h2>
                        <div className="flex gap-4">
                            <ul className="flex gap-2 border-2 border-gray-400 p-1 text-sm">
                                <li className="hover:text-blue-600 cursor-pointer">5M</li>
                                <li className="hover:text-blue-600 cursor-pointer">15M</li>
                                <li className="hover:text-blue-600 cursor-pointer">30M</li>
                                <li className="hover:text-blue-600 cursor-pointer">1H</li>
                                <li className="hover:text-blue-600 cursor-pointer">2H</li>
                                <li className="hover:text-blue-600 cursor-pointer">4H</li>
                                <li className="hover:text-blue-600 cursor-pointer">All</li>
                            </ul>
                            <div className="flex gap-2 items-center justify-between cursor-pointer bg-blue-500 rounded-sm p-1 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                                <p className="text-sm">Filter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div id="graph"></div>
                </div>
                <div className='h-2/5 text-sm border-2 border-gray-400 rounded-md p-4'>
                    <h2 className="text-2xl font-bold">Refined News & Data Flow</h2>
                    <div className='flex flex-col gap-2'>
                        <div className='flex font-semibold bg-blue-100 p-1'>
                            <div className='w-[10%]'>Type</div>
                            <div className='w-[60%]'>News</div>
                            <div className='w-[10%]'>Score</div>
                            <div className='w-[10%]'>Impact</div>
                            <div className='w-[10%]'>Probability</div>
                        </div>
                        <div className='flex border-b-2'>
                            <div className='w-[10%] flex gap-2 items-center'>
                                <div className=' w-4 h-4 rounded-md bg-yellow-500'></div>
                                <p>ERU</p>
                            </div>
                            <div className='w-[60%]'>The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes.</div>
                            <div className='w-[10%]'>+1</div>
                            <div className='w-[10%]'>Neutral</div>
                            <div className='w-[10%]'><p className='text-center p-1 rounded-md bg-blue-300 text-blue-800'>High</p></div>
                        </div>
                        <div className='flex border-b-2'>
                            <div className='w-[10%] flex gap-2 items-center'>
                                <div className=' w-4 h-4 rounded-md bg-blue-500'></div>
                                <p>INR</p>
                            </div>
                            <div className='w-[60%]'>The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes.</div>
                            <div className='w-[10%]'>+1</div>
                            <div className='w-[10%]'>High</div>
                            <div className='w-[10%]'><p className='text-center p-1 rounded-md bg-blue-300 text-blue-800'>High</p></div>                        </div>
                        <div className='flex border-b-2'>
                            <div className='w-[10%] flex gap-2 items-center'>
                                <div className=' w-4 h-4 rounded-md bg-red-500'></div>
                                <p>CAD</p>
                            </div>
                            <div className='w-[60%]'>The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes.</div>
                            <div className='w-[10%]'>+1</div>
                            <div className='w-[10%]'>Medium</div>
                            <div className='w-[10%]'><p className='text-center p-1 rounded-md bg-blue-300 text-blue-800'>High</p></div>                        </div>
                        <div className='flex border-b-2'>
                            <div className='w-[10%] flex gap-2 items-center'>
                                <div className=' w-4 h-4 rounded-md bg-red-500'></div>
                                <p>CAD</p>
                            </div>
                            <div className='w-[60%]'>The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes.</div>
                            <div className='w-[10%]'>+1</div>
                            <div className='w-[10%]'>Low</div>
                            <div className='w-[10%]'><p className='text-center p-1 rounded-md bg-blue-300 text-blue-800'>High</p></div>                        </div>
                        <div className='flex border-b-2'>
                            <div className='w-[10%] flex gap-2 items-center'>
                                <div className=' w-4 h-4 rounded-md bg-green-500'></div>
                                <p>OIL</p>
                            </div>
                            <div className='w-[60%]'>The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes.</div>
                            <div className='w-[10%]'>+1</div>
                            <div className='w-[10%]'>Neutral</div>
                            <div className='w-[10%]'><p className='text-center p-1 rounded-md bg-blue-300 text-blue-800'>High</p></div>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}