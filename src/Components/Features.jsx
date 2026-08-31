const Features = ({title, description, ctaTitle, classNames, srcImg}) => {
  return (
    <div id="About" className={`mt-28 px-8 flex items-center xl:gap-0 justify-center lg:justify-between flex-wrap ${classNames}`}>
        <div className="bg-[#f6f6f6] p-8 rounded-md">
            <img src={srcImg} alt="" className="w-85 h-75 object-contain"/>
        </div>
        <div className="flex flex-col items-start gap-4 justify-center w-120">
            <span className="text-4xl font-bold">{title}</span>
            <span className="text-base">{description}</span>
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:text-shadow-lg hover:text-shadow-rose-300 hover:bg-black/80">{ctaTitle}</button>
        </div>
    </div>
    );
};
export default Features;