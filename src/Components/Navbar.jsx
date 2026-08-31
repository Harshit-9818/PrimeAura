const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <nav className="bg-black text-white flex justify-between py-4 px-16">
        <div className="flex items-center justify-center gap-5">
            <div onClick={()=> scrollToSection("Home")} className="text-2xl font-bold cursor-pointer hover:underline hover:text-shadow-lg hover:text-shadow-rose-700 float-smooth">PrimeAura</div>
            <span onClick={()=> scrollToSection("Home")} className="cursor-pointer hover:underline hover:text-shadow-lg hover:text-shadow-rose-400">Home</span>
            <span onClick={()=> scrollToSection("Products")} className="cursor-pointer hover:underline hover:text-shadow-lg hover:text-shadow-rose-400">Products</span>
            <span onClick={()=> scrollToSection("About")} className="cursor-pointer hover:underline hover:text-shadow-lg hover:text-shadow-rose-400">About</span>
        </div>
        <div className="md:flex items-center justify-center gap-5 hidden">
            <div className="flex items-center justify-center gap-1 hover:text-shadow-lg hover:text-shadow-rose-400 hover:underline cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}assets/cart-icon.svg`} alt="cart-icon" />
                <span className="text-sm">Cart</span>
            </div>
            <span onClick={()=> scrollToSection("Footer")} className="cursor-pointer hover:underline text-sm hover:text-shadow-lg hover:text-shadow-rose-400">Help</span>
            <span className="cursor-pointer hover:underline text-sm hover:text-shadow-lg hover:text-shadow-rose-400">Login</span>
            <span className="bg-white text-black py-2 px-3 rounded-full font-medium text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-300">Sign Up</span>
        </div>
    </nav>
  );
};
export default Navbar;
