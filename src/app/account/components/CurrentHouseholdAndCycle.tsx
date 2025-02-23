'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../../../../utils/supabase/client'

export default function CurrentHouseholdAndCycle ({ households }) {

    const supabase = createClient()

    console.log(households)
    const [selectedHousehold, setSelectedHousehold] = useState(households[0]?.id || null)
    const [currentCycle, setCurrentCycle] = useState(null)
    const [householdData, setHouseholdData] = useState(null)
    const [currentYear, setCurrentYear] = useState(null)

    useEffect(() => {
        if(!selectedHousehold) return

        setHouseholdData(households?.find(h => h.id === Number(selectedHousehold)))

        const fetchCycle = async () => {
            const { data : household } = await supabase
                .from('households')
                .select('days_played')
                .eq('id', selectedHousehold)
                .single()

            if(household) {
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

        fetchCycle()
        
    }, [selectedHousehold])
    
    // console.log(selectedHousehold)
    // console.log(householdData)

    return (
        <div className='relative flex flex-col items-center'>

            {!currentCycle && (
                <select 
                    name="Choose household" 
                    id=""
                    value={selectedHousehold}
                    onChange={(e) => setSelectedHousehold(e.target.value)}
                >
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
                    <button className='absolute right-[1%] sm:right-[5%] top-1/2 w-fit border-[2px] rounded-[14px] px-[20px] py-[10px] bg-white'>Day Done</button>
                </>
            )}
        </div>
    )
}