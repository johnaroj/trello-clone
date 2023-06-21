"use client"
import { fetchSuggestion } from '@/lib/fetchSuggestion';
import { useBoardStore } from '@/store/BoardStore';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'



function Suggestion() {
    const { board } = useBoardStore();
    const [loading, setLoading] = useState<boolean>(true);
    const [suggestion, setSuggestion] = useState<string>('');

    useEffect(() => {
        if (board.columns.size === 0) return;
        setLoading(true);
        const fetchSuggestionFunc = async () => {
            const suggestions = await fetchSuggestion(board);
            setSuggestion(suggestions);
            setLoading(false);
        }
        fetchSuggestionFunc();
    }, [board])
    return (
        <p className='flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
            <UserCircleIcon className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${loading ? "animate-spin" : ""}`} />
            {
                suggestion && !loading ? suggestion : "GPT is summarizing your tasks for the day ..."
            }
        </p>
    )
}

export default Suggestion