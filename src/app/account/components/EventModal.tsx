'use client'

import Image from "next/image";
import React, { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EventModal({ isOpen, onClose } : ModalProps) {
    if(!isOpen) return null

    useEffect(() => {
        if(typeof window !== 'undefined') {

            if(isOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
    
            return () => {
                document.body.style.overflow = 'auto'
            }
        }
    }, [isOpen])

    return (
        <div className="z-[100] fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="relative bg-white flex flex-col items-center bg-white relative w-[534px] px-[40px] pb-[20px] pt-[35px] border-[2px] rounded-[14px] space-y-[40px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            <h3 className="text-center">Death</h3>
                        </div>
                    </div>
                    <button
                        className="absolute right-[15px] -top-[30px]"
                        onClick={onClose}
                    >
                        <Image 
                            src={'/images/Icon.png'}
                            alt='close icon'
                            width={24}
                            height={24}
                        />
                    </button>
                <Image 
                    src={'/images/events_icons/Tombstone 1.png'}
                    alt=''
                    width={96}
                    height={96}
                />

                <p className="text-center">The Great Watcher's gaze faltered, and with it,</p>

                <div className="space-y-[20px]">
                    <p>selectsim</p>
                    <p className="text-center">was lost.</p>
                </div>

                <p className="text-center">No warning, no fanfare—just a quick exit, leaving everyone thinking, 'That was... unexpected.'</p>

                <button
                    className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                >
                    Save
                </button>
            </div>
        </div>
    )
}