import { Link } from "react-router-dom";


export default function DonationHorizontalCard({donation}) {
  
    
    const { id , title, category , image , text_color , price , category_bg , card_bg} = donation || {};

  return (

<div style={{backgroundColor:card_bg}} className="rounded-lg cursor-pointer flex">

<div>
    <img className="h-44 lg:h-52 w-44 lg:w-52 object-cover rounded-l-lg"  src={image} />
</div>


<div className="p-3 lg:p-5 flex flex-col gap-1 items-start justify-center flex-1">

<p style={{color:text_color, backgroundColor: category_bg}} className="inline py-1 px-4 rounded-md font-semibold text-xs md:text-sm lg:text-base"> {category} </p>
<h2 className="font-semibold text-lg lg:text-[23px]"> {title} </h2>
<h4 style={{color:text_color}} className="font-semibold text-lg mb-1"> ${price} </h4>

<Link to={`/donation-details/${id}`}>
<button style={{backgroundColor:text_color}} className="text-gray-50 font-semibold py-1 md:py-2 px-2 md:px-4 rounded text-xs md:text-sm lg:text-base" > View Details </button>
</Link>

</div>
</div>

  )
    
}
