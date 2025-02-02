import React from 'react';

function Loading(){
    return(
        <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
            <div class="flex space-x-2 animate-pulse">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
        </div>
    );
}

export default Loading