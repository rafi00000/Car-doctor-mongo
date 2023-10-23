import img1 from '/assets/images/banner/1.jpg'
import img2 from '/assets/images/banner/2.jpg'
import img3 from '/assets/images/banner/3.jpg'
import img4 from '/assets/images/banner/4.jpg'


const Banner = () => {


    return (
        <div className="carousel w-full min-h-screen">

{/* slider 1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />

    <div className='absolute text-white space-y-5 bg-gradient-to-r from-black to-[rgb(0,0,0,0)] h-full flex items-center'>
        <div className='text-white space-y-7 pl-7 w-2/3'>
        <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className='btn btn-error btn-outline mr-4'>Discover more</button>
        <button className='btn btn-error btn-outline'>More Projects</button>
        </div>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;