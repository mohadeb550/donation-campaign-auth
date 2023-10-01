import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AllDonation } from "../Root/Root";
import swal from 'sweetalert';


export default function DonationDetails() {

    const allDonation = useContext(AllDonation);
    const { id } = useParams();
    const [ donation ,setDonation ] = useState({});


    const { image, title, price , description ,text_color } = donation;
  
    useEffect(()=>{
        setDonation(allDonation.find(donation => donation.id === id));
    },[])

    const handleSaveLocalStorage = () => {
        const prevDonationIds = JSON.parse(localStorage.getItem('donationIds'));
        if(prevDonationIds){
           const isExist = prevDonationIds.find(donation => donation === id);
           if(!isExist){
            prevDonationIds.push(id);
            localStorage.setItem('donationIds', JSON.stringify(prevDonationIds));
            swal("Donation Successful", "Thank you for your donation!", "success");
            return;
           }
           return swal("Already Exist", "You can't repeat same donation field!", "error");
        }
        localStorage.setItem('donationIds',JSON.stringify([id]));
        swal("Donation Successful", "Thank you for your donation!", "success");
    }

    

  return (

    <div className="mt-6 mb-14">
        
        <div className="relative">
            <img className=" h-[400px] md:[550px] lg:h-[700px] w-full object-cover rounded-md" src={image} />
            
            <div className="absolute bottom-0 h-[17%] w-full rounded-b-md bg-[#00000070] flex items-center p-8 ">

         <button style={{backgroundColor:text_color}} className="text-gray-50 font-semibold py-2 px-4 rounded" onClick={handleSaveLocalStorage}> Donate ${price} </button>
            </div>
        </div>
        <h1 className="text-4xl font-bold my-5"> {title} </h1>
        <p> {description} </p>

    </div>
  )
}
