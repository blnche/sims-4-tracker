'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
import EventModal from "./EventModal";
import EventsCards from "./EventsCards";
import { createClient } from '../../../../utils/supabase/client'


interface EventCardProps {
    household: object;
    cycle: object
}

export default function Events ({ household, cycle } : EventCardProps) {

    console.log(household)
    console.log(cycle)

    const supabase = createClient()

    //needs a function that checks if they are sims waiting to move into that household
    //transfers table if transfer.moving_in_household_id === household.id AND transer.days_played === household.days_played
    //then pop up confirm transfer and update in sims where sim.id === tranfer.sim_id in sim.current_household_id === household_id

    //filter by events.type : new array events
    //map events in each event type in return

    // new button needs to open modal and pass argument : isOpen, onClose, eventType, cycle, household id

    useEffect(() => {
        if(!household || !cycle) return

        const fetchEvents = async () => {
            const { data : sims, error : simsError } = await supabase
                .from('sims')
                .select('*')
                .eq('household_id', household.id)

            if(simsError) {
                console.error('Error fetchings Sims data:', simsError)
                return
            }

            console.log(sims)

            const simsIds = sims.map((sim) => sim.id)

            const { data : events, error : eventsError } = await supabase
                .from('events')
                .select('*')
                .eq('cycle_id', cycle.id)
                // .or(`sim1.in.(${simsIds.join(',')}), sim2.in.(${simsIds.join(',')}), sim3.in.(${simsIds.join(',')})`)
                .or(`sim_1_id.in.(${simsIds.join(',')})`)

            if(eventsError) {
                console.log('Error fetching events:', eventsError)
            } else {
                console.log(events)
            }
        }

        fetchEvents()

    }, [household])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [eventType, setEventType] = useState()

    const handleOpenModal = (type : string) => {
        setIsModalOpen(true)
        setEventType(type)
    }
    const handleCloseModal = () => {setIsModalOpen(false)}

    return (
        <div className="relative flex flex-wrap gap-[60px] justify-center py-[40px] px-[20px] mt-[55px]">
            <EventModal isOpen={isModalOpen} onClose={handleCloseModal} eventType={eventType}/>
            <EventsCards onOpenModal={handleOpenModal}/>
        </div>
    )
}