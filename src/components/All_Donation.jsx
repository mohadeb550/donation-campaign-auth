
import SingleDonation from "./SingleDonation"


export default function All_Donation({ searchDonation}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 my-24">
        {searchDonation.map(donation => <SingleDonation key={donation.id} donation={donation} /> )}
    </div>
  )
}
