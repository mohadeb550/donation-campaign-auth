import { useEffect, useState, useContext } from "react";
import { AllDonation } from "../Root/Root";
import Chart from "../components/PieChart";

export default function Statistics() {

  const allDonation = useContext(AllDonation);

  const [ totalDonation ,setTotalDonation ] = useState(12);
  const [ yourDonation ,setYourDonation ] = useState(0);

  useEffect(()=>{


    const storedDonationIds = JSON.parse(localStorage.getItem('donationIds'));
    if(storedDonationIds){
     const foundDonation = allDonation.filter(donation => storedDonationIds.includes(donation.id));

     setTotalDonation(allDonation.length - foundDonation.length)
     setYourDonation(foundDonation.length)
   
    }

  },[])

  return (
    <>
      <Chart totalDonation={totalDonation} yourDonation={yourDonation} />
    </>
  )
}
