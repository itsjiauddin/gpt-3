import gradientLine from "../assets/images/gradientLine.svg";

export default function About() {
  return (
    <div className="py-6 bg-customBlack-700 p-4 space-y-6 my-6 lg:space-y-24 lg:p-12">
      <div className="space-y-3 lg:grid lg:grid-cols-3">
        <div>
          <img className="block mx-auto lg:inline" src={gradientLine} alt="" />
          <h3 className="text-lg font-extrabold">What is GPT-3</h3>
        </div>
        <div className="lg:col-span-2">
          <p className="text-customBlue-400 font-medium">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className="space-y-3 lg:flex lg:justify-between">
        <h2 className="text-3xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-customViolet-500 to-customOrange-300">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-customOrange-400 font-medium">Explore The Library</p>
      </div>
      <div className="space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-6">
        <div className="space-y-3">
          <div>
            <img
              className="block mx-auto lg:inline"
              src={gradientLine}
              alt=""
            />
            <h3 className="text-lg font-extrabold">Chatbots</h3>
          </div>
          <p className="text-customBlue-400 font-medium">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <img
              className="block mx-auto lg:inline"
              src={gradientLine}
              alt=""
            />
            <h3 className="text-lg font-extrabold">Knowledgebase</h3>
          </div>
          <p className="text-customBlue-400 font-medium">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <img
              className="block mx-auto lg:inline"
              src={gradientLine}
              alt=""
            />
            <h3 className="text-lg font-extrabold">Education</h3>
          </div>
          <p className="text-customBlue-400 font-medium">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  );
}
