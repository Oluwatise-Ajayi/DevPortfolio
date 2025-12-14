import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const CodeSnippet = () => {
  return (
    <div className="md:col-span-2 md:row-span-1 bg-[#0d1117] rounded-3xl p-6 border border-white/5 font-mono text-sm relative group">
       <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 size={16} />
            <span>Auth API Middleware</span>
          </div>
          <ExternalLink size={14} className="text-gray-600" />
       </div>
       
       <div className="space-y-1 overflow-hidden h-32 text-xs md:text-sm">
         <div className="flex gap-4">
           <span className="text-gray-700 select-none">1</span>
           <span className="text-purple-400">func</span> <span className="text-blue-400">Middleware</span><span className="text-gray-300">(next http.Handler) {'{'}</span>
         </div>
         <div className="flex gap-4">
           <span className="text-gray-700 select-none">2</span>
           <span className="pl-4 text-purple-400">return</span> <span className="text-yellow-300">http.HandlerFunc</span><span className="text-gray-300">(func(w, r) {'{'})</span>
         </div>
         <div className="flex gap-4">
           <span className="text-gray-700 select-none">3</span>
           <span className="pl-8 text-gray-500">// Token validation logic...</span>
         </div>
         <div className="flex gap-4">
            <span className="text-gray-700 select-none">4</span>
            <span className="pl-8 text-purple-400">if</span> <span className="text-red-400">!valid</span> <span className="text-gray-300">{'{'}</span>
         </div>
         <div className="flex gap-4">
            <span className="text-gray-700 select-none">5</span>
            <span className="pl-12 text-blue-300">http.Error</span><span className="text-gray-300">(w, </span><span className="text-green-400">"Unauthorized"</span><span className="text-gray-300">, 401)</span>
         </div>
         <div className="flex gap-4">
            <span className="text-gray-700 select-none">6</span>
            <span className="pl-8 text-gray-300">{'}'}</span>
         </div>
       </div>
       
       <div className="mt-4 text-xs text-gray-500 border-t border-white/5 pt-3">
         High-performance JWT validation middleware with Redis caching layer reducing DB load by 85%.
       </div>
    </div>
  );
};

export default CodeSnippet;
