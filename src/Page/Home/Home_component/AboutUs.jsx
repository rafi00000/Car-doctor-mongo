import person_img from "/assets/images/about_us/person.jpg";
import parts_img from "/assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center my-20">
      {/* img part */}
      <div className="lg:w-1/2 relative ">
        <img src={person_img} alt="" className="w-3/4 rounded-md" />
        <img
          src={parts_img}
          alt=""
          className="w-2/4 absolute right-0 -bottom-10 xl:bottom-4 rounded-md border-8 border-white"
        />
      </div>

      {/* text part */}
      <div className="lg:w-1/2 space-y-5">
        <h2 className="text-xl font-bold text-orange-500">About us</h2>
        <h1 className="text-5xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
        <button className="btn-primary">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
