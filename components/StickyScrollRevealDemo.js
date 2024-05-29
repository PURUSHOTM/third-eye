"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "KUNAL LINGWAL",
        description:
            "Full stack developer, holding expertise in MERN stack with 6 months in industry experience",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white rounded-lg overflow-hidden">
                <Image
                    src="/img/kunal.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Kunal Lingwal"
                />
            </div>
        ),
    },
    {
        title: "ABHISHEK KUMAR",
        description:
            "Full stack developer, holding expertise in Linux development with 1+ years of experience",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white rounded-lg overflow-hidden">
                <Image
                    src="/img/abhishek.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Abhishek Kumar"
                />
            </div>
        ),
    },
    {
        title: "PURUSHOTTAM KUMAR",
        description:
            "MEAN stack developer holding expertise in backend development with 1+ years of experience",
        content: (
            <div className="w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white rounded-lg overflow-hidden">
                <Image
                    src="/img/purushottam.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Purushottam Kumar"
                />
            </div>
        ),
    },
    {
        title: "TEJUS",
        description:
            "Java full stack developer holding expertise in Java backend development with 6 months of experience",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white rounded-lg overflow-hidden">
                <Image
                    src="/img/tejus.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Tejus"
                />
            </div>
        ),
    },
    {
        title: "SAKSHI KUMAR",
        description:
            "MEAN stack developer holding expertise in backend development with 1+ years of experience",
        content: (
            <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white rounded-lg overflow-hidden">
                <Image
                    src="/img/sakshi.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Sakshi Kumar"
                />
            </div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 max-w-screen-lg mx-auto">
            <StickyScroll content={content} />
        </div>
    );
}
