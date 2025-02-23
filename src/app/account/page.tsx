import AccountForm from './account-form'
import { createClient } from '../../../utils/supabase/server'
import EventsCards from './components/EventsCards'
import CurrentHouseholdAndCycle from './components/CurrentHouseholdAndCycle'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: households, error } = await supabase
    .from('households')
    .select('*')

    // console.log(households)

  return (
    <>
        <CurrentHouseholdAndCycle households={households} />
        {/* <EventsCards /> */}
    </>

  )
}