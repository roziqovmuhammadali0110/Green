import React from "react";
import humik from "../../../assets/img/humik.jpg";
import aminocom from "../../../assets/img/aminocom.jpg";
import kaliyfos from "../../../assets/img/kaliyfos.jpg";
function ProductCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 m-4">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-[230px] w-[230px]" />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>
      <p className="text-gray-700 text-start">{description}</p>
    </div>
  );
}

function Catalog() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-[5%] py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Каталогимизда</h2>
          <p className="text-lg text-gray-600">93+ турлари маҳсулотлар</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            icon={humik}
            title="AGROFOS-D"
            description="Тавсиф этиш хусусияти: Ушбу препарат олма курти, цикадалар."
          />
          <ProductCard
            icon={aminocom}
            title="BENTOGRAN"
            description="Қўлланиши: Галла, маккажихори, беда ва шолининг фаол ўсув даврида."
          />
          <ProductCard
            icon={kaliyfos}
            title="DALATE"
            description="Тавсиф этиш хусусияти: Барча эксилардаги сўрувчи ва кемирувчи."
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
