import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-auto container px-[5%] py-9 flex-wrap">
        <div className="w-full md:w-[50%] space-y-3 mb-8 md:mb-0">
          <h1 className="font-semibold text-[30px] text-green-600">
            Kompaniya haqida
          </h1>
          <div>
            <p className="font-medium text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque
              labore iusto? Tempore temporibus odit cumque repudiandae nesciunt
              ad natus impedit nam. Repudiandae cum quia incidunt saepe
              consequuntur, officia corrupti doloribus error minima voluptas rem
              omnis perferendis placeat voluptates aliquam ipsum molestiae neque
              alias ducimus deserunt id fuga. Laborum deserunt doloremque
              voluptates eveniet! Ea esse unde dicta ipsa, laboriosam delectus
              et architecto nostrum vel! Dicta ducimus porro perspiciatis unde
              alias explicabo nisi nesciunt voluptates, veritatis qui voluptate
              sequi sit tempora rem ipsa ad deleniti repellat aliquam doloremque
              aperiam ratione, temporibus nostrum similique. Error
              necessitatibus itaque quia perferendis sunt quisquam alias harum
              quibusdam repellendus, perspiciatis quo possimus accusamus
              voluptatem numquam atque quas qui vitae nesciunt suscipit enim
              repellat ullam magni blanditiis mollitia. Fugiat sequi error iure
              incidunt id unde ex, perferendis odio asperiores quas accusamus
              magnam dolores ut nemo. Esse quasi nemo, ullam saepe, similique
              eum nostrum repudiandae, reprehenderit veniam nobis nesciunt
              voluptatum! Error itaque ipsa quas quo nihil earum consequatur
              sequi voluptate cupiditate ad, quasi sunt amet tempora ratione
              debitis.
            </p>
          </div>
          <div>
            <NavLink to="/about">
              <button className="text-green-600 font-medium">Batafsil</button>
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center border p-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0gd2oa1Ojiw&t=1841s"
            controls
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
