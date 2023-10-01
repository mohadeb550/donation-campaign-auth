import { useState } from "react";
import { useContext } from "react"
import { AllDonation } from "../Root/Root"
import All_Donation from "../components/All_Donation";
import Banner from "../components/Banner";


export default function Home() {

  const allDonation = useContext(AllDonation)
  const [ searchValue , setSearchValue ] = useState('');
  const [ searchDonation , setSearchDonation ] = useState(allDonation);

  const handleChange = (e) => {
      setSearchValue(e.target.value) 
  }

  const handleSearch = () => {
    setSearchDonation(allDonation.filter(donation => donation.category.toLowerCase().includes(searchValue.toLowerCase())))
  }

  return(
    <>
    <Banner handleChange={handleChange} handleSearch={handleSearch}/>
    <All_Donation searchDonation={searchDonation} />
    </>
  )
}
