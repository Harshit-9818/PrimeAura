import { APP_STORE_IMG_URL, PLAY_STORE_IMG_URL } from "../utils/app.constants";

const Footer = () => {
  return (
    <div id="Footer" className="bg-black text-white flex flex-col p-8 md:px-36 mt-14">
        <span className="text-3xl font-bold cursor-default hover:text-shadow-lg hover:text-shadow-rose-600">PrimeAura</span>
        <span className="mt-6 hover:underline cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-500">Visit Help Center</span>
        <div className="flex justify-between mt-6 gap-2 flex-wrap">
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg hover:text-shadow-rose-600">Company</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">About Us</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Our Offerings</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">News Room</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Investors</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg hover:text-shadow-rose-600">Quick Links</span>
                <div className="flex flex-col gap-3 mt-2 cursor-pointer">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Home</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Shop</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Best Sellers</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Deals</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg hover:text-shadow-rose-600">Customer Support</span>
                <div className="flex flex-col gap-3 mt-2 cursor-pointer">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">FAQs</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Shipping & Delivery</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Returns & Refunds</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Privacy Policy</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg hover:text-shadow-rose-600">Follow Us</span>
                <div className="flex flex-col gap-3 mt-2 cursor-pointer">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Instagram</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">Facebook</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">X</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-400">LinkedIn</span>
                </div>
            </div>
        </div>
        <div className="flex justify-start items-center gap-2">
            <img src={PLAY_STORE_IMG_URL} alt="PLAY STORE" className="w-[7.8rem] h-[7.8rem] cursor-pointer" />
            <img src={APP_STORE_IMG_URL} alt="APP STORE" className="w-[7.8rem] h-[7.8rem] cursor-pointer" />
        </div>
        <span className="mt-4 text-gray-400 text-xs cursor-default">&copy; 2026 PrimeAura Technologies Inc.</span>
    </div>
  );
};
export default Footer;