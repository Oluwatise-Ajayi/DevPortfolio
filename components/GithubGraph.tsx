"use client";
import React, { useEffect, useState } from 'react';

const GithubGraph = () => {
    const username = 'oluwatise-ajayi';
    const [contributions, setContributions] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                const data = await res.json();
                
                // data.contributions is array of days. We need the last ~365 days or so.
                // But our grid is small (7 rows x ~40 cols = 280 days).
                // Let's take the last 280 days.
                const allDays = data.contributions || [];
                const last280 = allDays.slice(-280); // Get last 280 days
                
                setContributions(last280);
                // Total for the year (from API usually) or sum
                setTotal(data.total?.lastYear || allDays.reduce((acc: number, day: any) => acc + day.count, 0));
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="md:col-span-2 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col justify-center animate-pulse">
                <div className="h-6 w-1/3 bg-gray-800 rounded mb-4"></div>
                <div className="grid grid-cols-[repeat(40,1fr)] gap-1 h-24 bg-gray-900/50 rounded"></div>
            </div>
        );
    }

    return (
    <div className="md:col-span-2 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col justify-center">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Contributions (Last Year)</p>
          <h3 className="text-3xl font-bold text-white flex items-center gap-2">
            {total.toLocaleString()} 
            <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded-full font-bold">
                {username}
            </span>
          </h3>
        </div>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          Less 
          <span className="w-2 h-2 bg-[#161b22] rounded-sm"></span>
          <span className="w-2 h-2 bg-[#0e4429] rounded-sm"></span>
          <span className="w-2 h-2 bg-[#006d32] rounded-sm"></span>
          <span className="w-2 h-2 bg-[#26a641] rounded-sm"></span>
          <span className="w-2 h-2 bg-[#39d353] rounded-sm"></span>
          More
        </div>
      </div>
      
      {/* Scrollable container for the graph */}
      <div className="flex gap-1 overflow-hidden mask-image-linear-gradient" style={{ direction: 'rtl' }}>
         {/* We group by weeks (7 days) for the vertical layout */}
         {/* The API returns flat array. We need to slice into chunks of 7. */}
         {/* Reversing to show latest first (RTL) or verify standard GitHub layout (Left-to-Right, but we want latest visible) */}
         
         {/* Standard GitHub Graph is Left-to-Right (Jan -> Dec). 
             Our container is small, so we likely want the LATEST contributions visible. 
             So we should slice the END of the array. */}
             
         {Array.from({ length: 40 }).map((_, weekIndex) => {
            // Calculate slice indices. 
            // array is [oldest ... newest]
            // We want week 0 to be the NEWEST (if we use RTL direction or flex-row-reverse? No standard graph is LTR).
            
            // Let's stick to standard LTR, but showing the last 40 weeks.
            // weekIndex 0 = (TotalWeeks - 40).
            
            const weeksToShow = 40;
            const totalWeeksAvailable = Math.floor(contributions.length / 7);
            const startWeek = totalWeeksAvailable - weeksToShow;
            
            const currentWeekIndex = startWeek + weekIndex;
            const weekData = contributions.slice(currentWeekIndex * 7, (currentWeekIndex + 1) * 7);

            return (
                <div key={weekIndex} className="flex flex-col gap-1">
                    {weekData.map((day, dayIndex) => {
                        // GitHub Colors
                        // 0: #161b22
                        // 1: #0e4429
                        // 2: #006d32
                        // 3: #26a641
                        // 4: #39d353
                        let colorClass = 'bg-[#161b22]';
                        if (day.count > 0) colorClass = 'bg-[#0e4429]';
                        if (day.count > 3) colorClass = 'bg-[#006d32]';
                        if (day.count > 6) colorClass = 'bg-[#26a641]';
                        if (day.count > 10) colorClass = 'bg-[#39d353]';

                        return (
                             <div 
                                key={dayIndex} 
                                className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-1 ring-white transition-all`}
                                title={`${day.date}: ${day.count} contributions`}
                             ></div>
                        );
                    })}
                     {/* Fill empty days if week is incomplete (rare if slicing correctly) */}
                     {weekData.length < 7 && Array.from({ length: 7 - weekData.length }).map((_, i) => (
                         <div key={`empty-${i}`} className="w-3 h-3 rounded-sm bg-transparent"></div>
                     ))}
                </div>
            )
         })}
      </div>
    </div>
  );
};

export default GithubGraph;
