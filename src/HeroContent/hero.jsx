const image = "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
const Hero = () => {
  return (
 <section>
    <div className='heroContentWrapper flex p-4 justify-between items-center bg-slate-100'>

    <div className="heroContent ml-[30px]">
        <h3 className='text-3xl'>Greewich is here to help you to Take care of your plants. <span className='text-cyan-600'>Promote Greenery</span></h3>
        <button className="bg-cyan-600 text-white px-5 py-2 rounded-md loginButton transition duration-500 ease-in-out hover:bg-white hover:text-black hover:border-2 hover:border-cyan-600">Login </button>
        <p className='text-sm'>Please sign in if you font have the account already</p>

    </div>
    <div className="imageContent mr-[30px] opacity-60">
        <div className="heroImage rounded-md">
          <p className='playVideo bg-slate-100 opacity-90 p-2 rounded-md'>Play Video</p>
        </div>
    </div>
    </div>
 </section>
  )
}
export default Hero