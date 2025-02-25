'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
import { createClient } from '../../../../utils/supabase/client'

interface EventItem {
    id: number;
    type: string;
    sim_1_id: number;
    sim_2_id: number;
    sim_3_id: number;
}
interface ModalProps {
    onOpenModal: (eventType : string) => void;
    events: EventItem[]
}

export default function EventsCards ({ onOpenModal, events } : ModalProps) {

    console.log(events)

    const supabase = createClient()

    const eventTypes = ['Deaths', 'Births', 'Marriages', 'Coronations', 'Divorces', 'Engagements', 'Birthday Roll', 'Pregnancies', 'Baby Attempts']

    const [filteredEvents, setFilteredEvents] = useState([])

    //figure out logic here but mabe move back this code to Events if using EventCard Component
    //filter events according to eventTypes
    //if event in eventypes is not in events received then display empty card

    //have another component eventCard. props : name, onOpenModal, events
    //eventCard component can render 
    //title : name; 
    //have a working button : onOpenModal(name); 
    //events : array of all eventType events (eg all deaths fro that cycle) and display them with the corresponding sims attached to each event (need sim name and lastname)
    //for each event i call sims table to find sim.id === event.sim_1_id, and/or sim.id === sim_2_id and/or sim.id === event.sim_3_id

    // const { data : events, error : eventsError } = await supabase
    // .from('events')
    // .select('*')
    // .eq('cycle_id', cycle.id)
    // // .or(`sim1.in.(${simsIds.join(',')}), sim2.in.(${simsIds.join(',')}), sim3.in.(${simsIds.join(',')})`)
    // .or(`sim_1_id.in.(${simsIds.join(',')})`)

    useEffect(() => {
        if(!events) return

        const fetchSimsForEvents = async () => {
            const simsData = await Promise.all(
    
                events.map(async (event) => {
                    console.log(event.type, event.sim_1_id)

                    const validSimsIds = [event.sim_1_id, event.sim_2_id, event.sim_3_id].filter(id => id !== undefined && id !== null)

                    if(validSimsIds.length === 0) {
                        return { eventId: event.id, sims: []}
                    }

                    const { data : sims, error : simsError } = await supabase
                        .from('sims')
                        .select('*')
                        .in('id', validSimsIds)
    
                    if(simsError) {
                        console.error('Error fetching sims for events:', simsError)
                        return { eventId: event.id, sims: []}
                    }
    
                    return { eventType: event.type, sims}
                })
            )
            console.log(simsData)
            setFilteredEvents(simsData)
        }
    
        fetchSimsForEvents()

    }, [events])


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
            {eventTypes.map((eventType, eventTypeIndex) => {
                const eventsForType = filteredEvents.filter(event => event.eventType === eventType.toLowerCase())

                return (
                    <div key={eventTypeIndex} className="flex flex-col items-center bg-white relative w-[286px] px-[10px] pb-[20px] pt-[40px] border-[1px] rounded-[16px] space-y-[10px]">

                        {/* {Event title} */}
                        <div className="bg-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] rounded-[16px] p-[6px]">
                            <div className="border-[1px] rounded-[14px] px-[20px] py-[10px] w-full">
                                <h3 className="text-center">{eventType}</h3>
                            </div>
                        </div>
                        {/* Events Section (empty if none) */}
                        <div className="w-full h-full p-[10px] space-y-[20px]">
                        {eventsForType.map((filteredEvent, filteredEventId) => (
                            <div key={filteredEventId} className="flex items-center space-x-[5px]">
                                
                                <Image 
                                    src={`/images/events_icons/${eventType}.png`}
                                    alt="Birthday Cake logo"
                                    width={24}
                                    height={24}
                                    priority
                                />
                                <p>{filteredEvent.sims.map((sim) => `${sim.name} ${sim.lastname}`).join(' & ')}</p>
                                   
                            </div>
                        ))}
                        </div>
                        <button
                            onClick={() => onOpenModal(eventType)}
                            className="w-fit border-[2px] rounded-[14px] px-[25px] py-[10px]"
                        >
                            New
                        </button>
                    </div>
                )
            })}
            </>
    )
}