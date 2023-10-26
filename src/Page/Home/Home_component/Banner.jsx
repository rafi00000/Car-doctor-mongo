import img1 from "/assets/images/banner/1.jpg";
import img2 from "/assets/images/banner/2.jpg";
import img3 from "/assets/images/banner/3.jpg";


const Banner = () => {
  return (
    <div className="carousel w-full min-h-screen">
      {/* slider 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />

        <div className="absolute text-white space-y-5 bg-gradient-to-r from-black to-[rgb(0,0,0,0)] h-full flex items-center">
          <div className="text-white space-y-7 pl-7 w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error btn-outline mr-4">
              Discover more
            </button>
            <button className="btn btn-error btn-outline">More Projects</button>
          </div>
        </div>

        <div className="absolute flex gap-5 right-5 bottom-10">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />

        <div className="absolute text-white space-y-5 bg-gradient-to-r from-black to-[rgb(0,0,0,0)] h-full flex items-center">
          <div className="text-white space-y-7 pl-7 w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error btn-outline mr-4">
              Discover more
            </button>
            <button className="btn btn-error btn-outline">More Projects</button>
          </div>
        </div>

        <div className="absolute flex gap-5 right-5 bottom-10">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />

        <div className="absolute text-white space-y-5 bg-gradient-to-r from-black to-[rgb(0,0,0,0)] h-full flex items-center">
          <div className="text-white space-y-7 pl-7 w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-error btn-outline mr-4">
              Discover more
            </button>
            <button className="btn btn-error btn-outline">More Projects</button>
          </div>
        </div>

        <div className="absolute flex gap-5 right-5 bottom-10">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
