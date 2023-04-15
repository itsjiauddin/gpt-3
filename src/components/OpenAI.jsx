import gradientLine from "../assets/images/gradientLine.svg";
import img2 from "../assets/images/img2.png";

export default function OpenAI() {
  return (
    <div className="py-6 space-y-6 lg:py-12 lg:space-y-12">
      <div className="space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
        <div className="space-y-3 lg:space-y-8">
          <h2 className="text-3xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-customViolet-500 to-customOrange-300">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <p className="text-customOrange-400 font-medium">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="lg:col-span-2 px-6 lg:space-y-12">
          <div className="text-left grid grid-cols-3 gap-10">
            <div>
              <img src={gradientLine} alt="" />
              <h3 className="text-lg font-extrabold">
                Improving end distrusts instantly
              </h3>
            </div>
            <div className="col-span-2">
              <p className="text-customBlue-400 font-medium">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded.
              </p>
            </div>
          </div>
          <div className="text-left grid grid-cols-3 gap-10">
            <div>
              <img src={gradientLine} alt="" />
              <h3 className="text-lg font-extrabold">
                Become the tended active
              </h3>
            </div>
            <div className="col-span-2">
              <p className="text-customBlue-400 font-medium">
                Considered sympathize ten uncommonly occasional assistance
                sufficient not. Letter of on become he tended active enable to.
              </p>
            </div>
          </div>
          <div className="text-left grid grid-cols-3 gap-10">
            <div>
              <img src={gradientLine} alt="" />
              <h3 className="text-lg font-extrabold">Message or am nothing</h3>
            </div>
            <div className="col-span-2">
              <p className="text-customBlue-400 font-medium">
                Led ask possible mistress relation elegance eat likewise
                debating. By message or am nothing amongst chiefly address.
              </p>
            </div>
          </div>
          <div className="text-left grid grid-cols-3 gap-10">
            <div>
              <img src={gradientLine} alt="" />
              <h3 className="text-lg font-extrabold">Really boy law county</h3>
            </div>
            <div className="col-span-2">
              <p className="text-customBlue-400 font-medium">
                Really boy law county she unable her sister. Feet you off its
                like like six. Among sex are leave law built now. In built table
                in an rapid blush.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 lg:grid lg:grid-cols-2">
        <div>
          <img className="block mx-auto w-96 lg:w-5/6" src={img2} alt="" />
        </div>
        <div className="space-y-6 lg:pt-40">
          <p className="text-customBlue-200 font-medium">
            Request Early Access to Get Started
          </p>
          <h2 className="text-3xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-customViolet-500 to-customOrange-300">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-customBlue-400 font-medium">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-customOrange-400 font-medium">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
      <div className="space-y-6 py-4 bg-gradient-to-tr from-customViolet-500 to-customOrange-300 text-black rounded lg:flex lg:justify-between lg:items-center lg:p-10">
        <div className="space-y-3">
          <p className="text-customBlack-900 font-medium">
            Request Early Access to Get Started
          </p>
          <h2 className="text-2xl font-extrabold leading-snug">
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <div>
          <button className="bg-black px-4 py-2 text-white rounded-lg font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
