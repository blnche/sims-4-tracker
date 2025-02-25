'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventType: string | null
}

export default function EventModal({ isOpen, onClose, eventType } : ModalProps) {
    if(!isOpen) return null
    console.log(eventType)
    const type = eventType?.toLowerCase()
    console.log(type)
    // this function needs arguments : isopen, onclose, eventype, cycle, household id

    //each event card has a button to open pop up, each pop up is different in content but design is the same : title design,close button, save button, only the sim selectors varies. 
    //button could be a save function that pass arguments non mandatory 
    // if event is baby attempt found sim baby attempts number and update it and setBabyAttempt()

    const [babyAttempts, setBabyAttempts] = useState(0)

    const modalStrings = {
        intro: [
            {
                type: 'birth',
                string1: 'A new Sim takes their first breath under the watchful gaze of the Great Watcher.',
                string2: 'Welcome,',
                connector: 'child of…',
                string3: '',
                string4: 'Congratulations!'
            },
            {
                type: 'divorce',
                string1: 'The Great Watcher turns the page of fate…',
                string2: 'The bond once forged between',
                connector: 'and',
                string3: 'is no more.',
                string4: 'What was once entwined is now set free—may destiny guide them on new paths.'
            },
            {
                type: 'engagement',
                string1: 'Under the watchful gaze of the Great Watcher, a promise is made…',
                string2: '',
                connector: 'and',
                string3: 'are now engaged!',
                string4: 'May their union be blessed.'
            },
            {
                type: 'baby attempt',
                string1: 'The Great Watcher raises an eyebrow…',
                string2: '',
                connector: 'and',
                string3: 'have set their sights on expanding the family.',
                string4: 'Will the stars align?',
                bonus: (attemptsLeft : Number) => `Sim 1 has ${attemptsLeft} attempts left.`
            },
            {
                type: 'marriage',
                string1: 'By divine decree of the Great Watcher, let it be known—',
                string2: '',
                connector: 'and',
                string3: 'are now united in sacred bond!',
                string4: 'May their love endure beyond time itself!'
            },
            {
                type: 'coronation',
                string1: 'With the Great Watcher’s gaze upon them,',
                string2: '',
                connector: '',
                string3: 'ascends to the throne.',
                string4: 'Let the world witness their reign, for destiny has chosen its ruler!'
            },
            {
                type: 'death',
                string1: 'The Great Watcher’s gaze faltered, and with it,',
                string2: '',
                connector: '',
                string3: 'was lost.',
                string4: 'No warning, no fanfare—just a quick exit, leaving everyone thinking, "That was... unexpected."'
            },
            {
                type: 'pregnancy',
                string1: 'The Great Watcher has foreseen new life on the horizon…',
                string2: 'A child is on the way for',
                connector: 'and',
                string3: '',
                string4: 'May their journey to parenthood be blessed!'
            } 
        ]
    }


    modalStrings.intro.map((i) => {
        console.log(i)
    })

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


    const handleSave = (type : string, sim1 : string, sim2 : string, sim3 : string ) => {
        //find sim1, sim2, sim3 in database
        //marriage, engagement, baby attempts, pregnancies, birth : both sims are not by default from same household. we could have a search for sim2 selector wher you type name of sim and you have suggestions.
        //add in database new event with event type, cycle id, sim1 id, sim2 id, sim3 id
    }

    return (
        <div className="z-[100] fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="relative bg-white flex flex-col items-center bg-white relative w-[534px] px-[40px] pb-[20px] pt-[35px] border-[2px] rounded-[14px] space-y-[40px]">
                    <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                        <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                            {/* changes depending on eventType */}
                            <h3 className="text-center">{eventType}</h3>
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
                    {/* changes depending on evenType */}
                <Image 
                    src={`/images/events_icons/${eventType}.png`}
                    alt=''
                    width={96}
                    height={96}
                />
                {/* changes depending of event */}
                <p className="text-center">{modalStrings.intro.find((intro) => intro.type === type)?.string1}</p>
                { (type === 'divorce' || type === 'birth' || type === 'pregnancy') && (
                    <p className="text-center">{modalStrings.intro.find((intro) => intro.type === type)?.string2}</p>
                )
                    
                }
                {/* if divorces or birth or pregnancy one more sentence before everything */}
                {/* if divorce, engagement, pregancy oen sentence before selects */}

                {/* if birth : input name input lastname, sentence, select parent 1 select parent 2 */}
                {/* if death or coronation only one select, one sentence */}
                {/* else sim 1 select, 'and', sim 2 select */}
                <div className="space-y-[20px]">
                    <p>selectsim</p>
                    <p className="text-center">{modalStrings.intro.find((intro) => intro.type === type)?.string3}</p>
                </div>


                {/* changes depending on event */}
                <p className="text-center">{modalStrings.intro.find((intro) => intro.type === type)?.string4}</p>

                {type === 'baby attempt' && (
                    <p className="text-center text-sm">{modalStrings.intro.find((intro) => intro.type === type)?.bonus(babyAttempts)}</p>
                )}
                {/* if baby attempt one more sentence before button */}
                <button
                    className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                >
                    Save
                </button>
            </div>
        </div>
    )
}