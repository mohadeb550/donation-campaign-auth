import { Link } from "react-router-dom";

export default function SingleDonation({donation}) {

    const { id , title, category , image , text_color , category_bg , card_bg} = donation || {};

  return (

    <Link to={`/donation-details/${id}`}>
<div style={{backgroundColor:card_bg}} className="rounded-lg cursor-pointer">

<div>
    <img className="h-48 w-full object-cover rounded-t-lg"  src={image} />
</div>


<div className="p-5">

<p style={{color:text_color, backgroundColor: category_bg}} className="inline py-1 px-4 rounded-md font-semibold"> {category} </p>
<h2 style={{color:text_color}} className="font-semibold text-xl mt-2"> {title} </h2>
</div>
</div>

    </Link>
  )
}
 