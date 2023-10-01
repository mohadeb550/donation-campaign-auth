

export default function Banner({handleSearch, handleChange}) {
  return (
    <>
    <img src="https://i.ibb.co/f84YZ63/banner.png" className="absolute opacity-5 object-cover -z-30 top-0 w-full h-[42vh] lg:h-[52vh] left-0"/>
    <div className="h-[250px] md:h-[370px] flex flex-col justify-center items-center gap-10 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold"> I Grow By Helping People In Need</h2>
        <div className="border bg-white w-[300px] md:w-[400px] rounded-md pl-3 flex"> 
            <input type="text" placeholder="Search here... " className="outline-none border-none w-full" onChange={handleChange}/>
            <button className="bg-red-500 text-gray-50 font-semibold py-2 px-4 rounded-r-md hover:bg-red-600" onClick={handleSearch}> Search </button>
        </div>

    </div>
    </>
  )
}
