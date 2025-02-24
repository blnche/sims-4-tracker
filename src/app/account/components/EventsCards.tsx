'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
interface ModalProps {
    onOpenModal: (eventType : string) => void;
}

export default function EventsCards ({ onOpenModal } : ModalProps) {
    
    return (
        <>
            <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Birthday Roll</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/CakeBirthday 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Deaths</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/Tombstone 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                    onClick={() => onOpenModal('death')}
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Births</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/BabyBottle 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Engagements</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/WeddingRing 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/WeddingRing 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Marriages</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/icones-Sims-4-GP11-Wedding-stories-mariage-LuniverSims (38) 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Divorces</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex items-center space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/WeddingDivorce 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Rachel Lemail & Elizabeth-Denetia Delaroche</p>
                        </div>
                        <div className="flex items-center space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/WeddingDivorce 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Rachel Lemail & Elizabeth-Denetia Delaroche</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Baby Attempts</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/HeartFire 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1 & Sim 2</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Pregnancies</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/BabyNew 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1 & Sim 2</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>

                <div className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Coronations</h3>
                        </div>
                    </div>
                    <div className="w-full h-full p-[10px] space-y-[20px]">
                        <div className="flex space-x-[5px]">
                            <Image 
                                
                                src="/images/events_icons/Crown 1.png"
                                alt="Birthday Cake logo"
                                width={24}
                                height={24}
                                priority
                            />
                            <p>Sims 1</p>
                        </div>
                    </div>
                    <button
                        className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                    >
                        New
                    </button>
                </div>
            </>
    )
}