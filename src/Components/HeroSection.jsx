const HeroSection = () => {
  return (
    <div id ="Home" className="flex items-center justify-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 lg:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-4 w-full">
            <span className="text-[3.23rem] font-medium">Shop Smarter. Shop Better.</span>
            <span className="w-full lg:w-152">
                Discover thousands of premium products, each carefully selected for quality, style and value bringing everything you need and love into one convenient place. Elevate your shopping experience with PrimeAura today!
            </span>
            <div className="flex gap-4 mt-8">
                <button className="bg-black text-white px-8 py-3 rounded-md cursor-pointer font-bold hover:text-shadow-lg hover:text-shadow-rose-300 hover:bg-black/80">
                    Show Now
                </button>
                <button className="bg-black text-white px-8 py-3 rounded-md font-bold cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-300 hover:bg-black/80">
                    Explore Deals
                </button>
            </div>
        </div>
        <img src="/assets/hero-image.png" alt="hero-image" className="w-[20rem] lg:w-120 lg:h-100" />
    </div>
  );
};
export default HeroSection;