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
        <div className='flex flex-col items-center'>
            <h2>Household Name</h2>
            <div className='flex flex-row justify-center space-x-3'>
                <p>Early 1800</p>
                <p>Sim Day 1</p>
            </div>
        </div>
        <EventsCards />
        {/* <AccountForm user={user} /> */}
    </>

  )
}