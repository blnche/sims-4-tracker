import AccountForm from './account-form'
import { createClient } from '../../../utils/supabase/server'
import EventsCards from './components/EventsCards'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  

  return (
    <>
        <div className='relative flex flex-col items-center'>
            <h2>Household Name</h2>
            <div className='flex flex-row justify-center space-x-[20px]'>
                <p>Early 1800</p>
                <p>Sim Day 1</p>
            </div>
            <button className='absolute right-[1%] sm:right-[5%] top-1/2 w-fit border-[2px] rounded-[14px] px-[20px] py-[10px] bg-white'>Day Done</button>
        </div>
        <EventsCards />
        {/* <AccountForm user={user} /> */}
    </>

  )
}