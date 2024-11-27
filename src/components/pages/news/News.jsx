//import axios from "axios";
import React from "react";

const News = () => {
  //   const data = {
  //     username: "exampleUser", // Foydalanuvchi nomi
  //     password: "examplePassword" // Parol
  //   };

  //   // So'rovni yuborish
  //   axios
  //     .post("http://37.140.216.178/api/v1/users/login/", data)
  //     .then((res) => {
  //       console.log("Muvaffaqiyatli javob:", res.data); // Muvaffaqiyatli natija
  //     })
  //     .catch((err) => {
  //       if (err.response) {
  //         // Serverdan kelgan javob
  //         console.error("Xatolik ma'lumoti:", err.response.data);
  //         console.error("Status kodi:", err.response.status);
  //       } else if (err.request) {
  //         // So'rov yuborilgan, lekin javob olinmagan
  //         console.error("So'rov yuborilgan, lekin javob yo'q:", err.request);
  //       } else {
  //         // So'rovni yuborishda muammo bo'lgan
  //         console.error("Xatolik:", err.message);
  //       }
  //     });

  return (
    <section>
      <div className="px-[5%] container mx-auto font-medium py-10">
        <div>
          <h1>Янгиликларни кузатиб боринг</h1>
        </div>
        <div>
          <div className="w-[450px] h-[130px] rounded-lg flex items-center justify-between gap-4 bg-slate-100">
            <div>
              <img
                src="https://www.ifoda.uz/uploads/1/23G4jKkT2TVLgFL9hD3-4tJpNcEwYZD_.png"
                alt=""
                className="h-[130px] rounded-l-lg w-[230px]"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 h-full w-full">
              <h3 className="text-[#654848]">Чегирмалар каталоги</h3>
              <p className="text-green-500">04.09.2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
