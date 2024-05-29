import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
    return (
        <div className="max-w-screen-xl mx-auto h-[800px] flex justify-center items-center">
            <div className="w-full relative max-w-lg">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] rounded-full blur-3xl" />
                <div className="relative shadow-2xl bg-gray-900 border border-gray-800 px-8 py-12 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-start">
                    <div className="h-6 w-6 rounded-full border flex items-center justify-center mb-6 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-3 w-3 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-2xl text-white mb-6 relative z-50">
                        ONE TIME PAYMENT
                    </h1>

                    <p className="font-normal text-lg text-slate-500 mb-6 relative z-50">
                        WE'RE CURRENTLY OUT OF STOCK :)
                    </p>

                    <button className="border px-6 py-2 rounded-lg border-gray-500 text-gray-300 hover:bg-gray-800 transition">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
