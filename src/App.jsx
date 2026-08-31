import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Products from "./Components/Products.jsx";
import Features from "./Components/Features.jsx";
import Footer from "./Components/Footer.jsx";
const App=()=>{
  return (
    <div className="app-container">
      <Navbar />
      {/* <h1 className="text-3xl font-bold hover:text-shadow-lg hover:text-shadow-rose-400 cursor-default underline text-center my-4">
        Welcome to PrimeAura
      </h1> */}
      <HeroSection />
      <Products />
      <div className="flex flex-col w-full lg:w-[80%] m-auto">
        <Features title="Why Choose Us?" description="We make online shopping simple, safe and rewarding with premium products, fast delivery and exceptional customer service." ctaTitle="Learn More" srcImg={`${import.meta.env.BASE_URL}assets/first-feature.png`} />
        <Features classNames="flex-row-reverse" title="Shop by Category" description="Find Everything you need in just a few clicks - from fashion and electronics to home essentials and more." ctaTitle="Browse Categories" srcImg={`${import.meta.env.BASE_URL}assets/second.png`} />
        <Features title="Trending Right Now" description="Discover what's hot! Shop the products everyone is loving today." ctaTitle="View Best Sellers" srcImg={`${import.meta.env.BASE_URL}assets/third.png`} />
        <Features classNames="flex-row-reverse" title="Limited Time Deals 🔥" description="Grab exclusive discounts and special offers before they're gone." ctaTitle="Shop Deals" srcImg={`${import.meta.env.BASE_URL}assets/four.png`} />
        <Features title="Loved by Thousands" description="Amazing experience! The delivery was quick, and the product quality exceeded expectations." ctaTitle="Shop Now" srcImg={`${import.meta.env.BASE_URL}assets/five.png`} />
      </div>
      <Footer />
    </div>
  );
};
export default App;
