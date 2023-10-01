import { AllDonation } from "../Root/Root"
import { useContext, useEffect, useState } from "react"
import DonationHorizontalCard from "../components/DonationHorizontalCard";

export default function Donation() {

  const allDonation = useContext(AllDonation)
  const [ donationItems , setDonationItems ] = useState([]);
  const [ displayItems ,setDisplayItems ] = useState([]);
  const [isClick , SetIsClick ] = useState(false);

  useEffect(()=>{
    const prevDonationIds = JSON.parse(localStorage.getItem('donationIds'))
    if(prevDonationIds){
      const storedDonation = allDonation.filter(donation => prevDonationIds.includes(donation.id));
      setDonationItems(storedDonation)
      setDisplayItems(storedDonation.slice(0, 4))
    }
  },[])

  const handleSeeAll = () =>{
    setDisplayItems(donationItems)
    SetIsClick(true)
  }


  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {displayItems?.map(donation => <DonationHorizontalCard key={donation.id} donation={donation} /> )}
      
    </div>

    <div className={`h-80 flex justify-center items-center ${donationItems.length && 'hidden'}`}>
      <h2 className="text-xl md:text-4xl font-semibold italic"> No Donation Found </h2>
    </div>

    {donationItems.length > 4? <div className={`flex justify-center items-center m-10`}>
        <button className={`bg-green-600 text-gray-50 font-semibold px-7 py-1 md:py-3 rounded-md hover:bg-green-700 ${isClick && 'hidden'}`} onClick={handleSeeAll}> See All </button>
      </div> : ''}
    </>
  )
}
