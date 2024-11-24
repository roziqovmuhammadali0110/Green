const Contact = ({ address = "Tashkent, Uzbekistan" }) => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;
  return (
    <div className="bg-[#F2F2F3]">
      <div className="container mx-auto px-[5%] py-10 space-y-10">
        <div className="w-full">
          <h1 className="font-semibold text-[30px] text-green-500">
            Bosh ofis
          </h1>
        </div>
        <div className="relative w-full h-96">
          <iframe
            src={mapSrc}
            title="Google Map"
            aria-label="Map"
            aria-roledescription="map"
            role="region"
            className="absolute inset-0 w-full h-full border-none"
            allowFullScreen></iframe>
        </div>
        <div className="bg-white space-y-7 p-10">
          <h2 className="text-[#484848] text-[20px] font-semibold">
            Qayta aloqa uchun ariza
          </h2>
          <form className="space-y-4">
            <div className="w-full flex items-center justify-between ">
              <input
                type="text"
                placeholder="Ism Familia"
                className=" shadow-md active:shadow-xl p-2 w-[300px] border-none bg-[#F2F3F3] rounded-md outline-none"
                required
              />
              <input
                type="text"
                placeholder="Telefon"
                className=" shadow-md active:shadow-xl p-2 w-[300px] border-none bg-[#F2F3F3] rounded-md outline-none"
                required
              />
              <input
                type="text"
                placeholder="El.pochta"
                className=" shadow-md active:shadow-xl p-2 w-[300px] border-none bg-[#F2F3F3] rounded-md outline-none"
                required
              />
            </div>
            <div className="w-full ">
              <textarea
                className="w-full outline-none bg-[#F2F3F3] p-2 rounded-md h-[400px]"
                required
                placeholder="Mavzu"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-[230px] h-12 rounded-lg bg-green-600 text-white font-medium rounded-tl-3xl rounded-br-3xl">
                {" "}
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
