import bannerLogo from '../assets/banner-background.png';
import coworkingVideo from '../assets/Coworking-video.png';

const Banner = () => {
  return (
    <section className="relative w-full bg-[#f9faff] flex flex-col md:flex-row items-center overflow-hidden">
      <div
        className="relative w-full md:w-1/2 h-[400px] md:h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bannerLogo})`,
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 md:bg-transparent z-10" />
        <div className="relative z-20 p-6 md:p-12 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#263238]">
            Host your meeting with world-class amenities.
          </h1>
          <p className="text-2xl md:text-5xl font-bold text-[#263238]">
            Starting at <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
        <div className="absolute inset-0 mx-6 md:mx-12 my-6 bg-[#FFBB00] opacity-10 rounded-3xl z-0" />

        <img
          src={coworkingVideo}
          alt="Coworking Video"
          className="relative z-10 max-w-sm w-full h-auto object-contain shadow-xl rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Banner;
