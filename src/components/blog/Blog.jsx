import izobioCom from "../../assets/img/izobioCom.jpg";
import greenPlus from "../../assets/img/greenPlus.jpg";
import kaliyfos from "../../assets/img/kaliyfos.jpg";
import kalsiyCom from "../../assets/img/kalsiyCom.jpg";

function ProductCard({ icon, date, title, description }) {
  return (
    <div className="bg-white space-y-3 rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-[350px] lg:w-[400px] m-4">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="" />
      </div>
      <h3 className="text-xl font-semibold text-[#484848] text-start mb-2">
        {title}
      </h3>
      <p className="font-medium text-start mb-2 text-green-600">{date}</p>
      <p className="text-gray-700 font-medium text-start">{description}</p>
      <button className="bg-green-500 text-white p-2 w-full font-medium rounded hover:bg-green-600 transition">
        Davomi
      </button>
    </div>
  );
}

const Blog = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-[5%] py-8">
        <div className="text-start mb-8">
          <h2 className="text-3xl font-bold text-green-500">
            Блогимизни кузатиб боринг
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            icon={kaliyfos}
            title="ҒЎЗАНИ ЎҒИТЛАШ ДАСТУРИ"
            date="20.11.2024"
            description="Тавсиф этиш хусусияти: Ушбу препарат олма курти, цикадалар."
          />
          <ProductCard
            icon={greenPlus}
            title="BENTOGRAN"
            date="15.10.2024"
            description="Қўлланиши: Галла, маккажихори, беда ва шолининг фаол ўсув даврида."
          />
          <ProductCard
            icon={kalsiyCom}
            title="DALATE"
            date="10.9.2024"
            description="Тавсиф этиш хусусияти: Барча эксилардаги сўрувчи ва кемирувчи."
          />
          <ProductCard
            icon={izobioCom}
            title="DALATE"
            date="12.08.2024"
            description="Тавсиф этиш хусусияти: Барча эксилардаги сўрувчи ва кемирувчи."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
