"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "",
        description: (
            <>
                <p>
                The "3rd Eye for the Blind" is an innovative assistive device designed to enhance the mobility and safety of visually impaired individuals. Leveraging Arduino technology, the project employs ultrasonic sensors to detect obstacles in the user's path and provides real-time feedback through haptic signals. This intuitive design allows users to navigate their surroundings with greater confidence and independence. The device is lightweight, easy to use, and offers a reliable solution to improve the daily lives of those with vision impairments.
                </p>
               
            </>
        ),
        badge: "ABOUT",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        description: (
            <>
                <p>
                Arduino Microcontroller: Acts as the core of the system, processing input from sensors and controlling output to the haptic feedback devices.
                </p><br/>
                <p>
                Ultrasonic Sensors: Measure the distance to obstacles and provide input data to the Arduino for processing.

                </p><br/>
                Vibration Motors: Deliver tactile feedback to the user based on processed sensor data.

                <p>
<p>
Power Management: Efficient battery usage and low-power components to extend operational life.

</p>
                </p>
            </>
        ),
        badge: "TECHNOLOGIES USED",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        description: (
            <>
            <p>
            Obstacle Detection: Utilizes ultrasonic sensors to detect objects in the user's path up to a certain range, ensuring early warning and safe navigation.

            </p><br/>
            <p>
            Haptic Feedback: Equipped with vibration motors that provide tactile feedback to the user, indicating the proximity and direction of detected obstacles.

            </p><br/>
            <p>
Energy Efficient: Designed to consume minimal power, ensuring long-lasting operation on a single battery charge.

            </p><br/>
            <p>
            Portable Design: Compact and lightweight, making it easy to carry and use in various environments.

            </p><br/>
              
            </>
        ),
        badge: "KEY FEATURES",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
