'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../../../../utils/supabase/client'
import Events from './Events'

export default function CurrentHouseholdAndCycle ({ households }) {

    const supabase = createClient()

    console.log(households)
    const [selectedHousehold, setSelectedHousehold] = useState('Choose Household')
    const [currentCycle, setCurrentCycle] = useState(null)
    const [householdData, setHouseholdData] = useState(null)
    const [currentYear, setCurrentYear] = useState(null)

    const fetchCycle = async () => {
        if(!selectedHousehold) return

        const { data : household } = await supabase
            .from('households')
            .select('days_played')
            .eq('id', selectedHousehold)
            .single()

        if(household) {
            console.log(household)
            const { data : cycle } = await supabase
                .from('cycles')
                .select('*')
                .eq('id', household.days_played)
                .single()

            setCurrentCycle(cycle)

            if(cycle) {
                const { data : year } = await supabase
                    .from('years')
                    .select('*')
                    .eq('id', cycle.year_id)
                    .single()

                setCurrentYear(year)
            }
        }
    }
    
    useEffect(() => {
        
        setHouseholdData(households?.find(h => h.id === Number(selectedHousehold)))   

        fetchCycle()
        
    }, [selectedHousehold])

    // function handleformsubmitted that adds sims to hosueholds and in database and updates the householdData (?)

    const handleDayDone = async () => {

        if(!householdData) return
        
        const { data: household, error: householdsError } = await supabase
            .from('households')
            .update({ days_played: householdData.days_played + 1 })
            .eq('id', householdData.id)
            .select()
            .single()
            
        if(householdsError) {
            console.error('Error updating household days played:', householdsError)
            return
        }
        
        setHouseholdData(household)

        await fetchCycle()

        // const { data: sims, error: simsError } = await supabase
        //     .from('sims')
        //     .update({ days_played: supabase.rpc('increment', { column: 'days_played', value: 1}) })
        //     .eq('household_id', household.id)

        // if(simsError) {
        //     console.error('Error updating sims days played:', simsError)
        //     return
        // }
        
    }

    return (
        <div className='relative flex flex-col items-center'>

            {!currentCycle && (
                <select 
                    value={selectedHousehold}
                    onChange={(e) => setSelectedHousehold(e.target.value)}
                >
                    <option value='Choose Household'>Choose Household</option>
                    {households.map((household) => (
                        <option key={household.id} value={household.id}>{household.name}</option>
                    ))}
                </select>
            )}

            {currentCycle && currentYear && householdData && (
                <>
                    <h2>{householdData.name}</h2>
                    <div className='flex flex-row justify-center space-x-[20px]'>
                        <p>{currentCycle.cycle + ' ' + currentYear.year}</p>
                        <p>Sim Day {currentCycle.id}</p>
                    </div>
                    <button 
                        onClick={handleDayDone}
                        className='absolute right-[1%] sm:right-[5%] w-fit border-[2px] rounded-[14px] px-[20px] py-[10px] bg-white'
                    >
                        Day Done
                    </button>
                    <Events household={householdData} cycle={currentCycle}/>
                </>
            )}

            {selectedHousehold && householdData && householdData.days_played === 0 && (
                <>{/*display sims from that household when they are created */}
                <p>form add sims to household</p>
                </>
            )}
        </div>
    )
}