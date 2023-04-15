import img1 from "../assets/images/img1.svg";
import profile from "../assets/images/profile.svg";
import google from "../assets/images/google.svg";
import slack from "../assets/images/slack.svg";
import atlassian from "../assets/images/atlassian.svg";
import shopify from "../assets/images/shopify.svg";
import dropbox from "../assets/images/dropbox.svg";

export default function Header() {
  return (
    <div className="py-6 space-y-6">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0">
        <div className="space-y-6 lg:my-24">
          <h1 className="text-6xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-customViolet-500 to-customOrange-300 lg:text-5xl lg:leading-tight">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-customBlue-400">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="grid grid-cols-3 px-6 lg:px-0">
            <input
              className="col-span-2 bg-customBlack-600 text-customBlack-500 pl-4"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="bg-customOrange-500 py-3 font-bold">
              Get Started
            </button>
          </div>
          <div className="lg:flex lg:items-center lg:gap-2">
            <img className="block mx-auto" src={profile} alt="" />
            <p className="text-sm">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div>
          <img className="block mx-auto" src={img1} alt="" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-5 place-items-center gap-4 px-4 md:flex md:justify-center md:items-center lg:gap-10">
          <img src={google} alt="" />
          <img src={slack} alt="" />
          <img src={atlassian} alt="" />
          <img src={dropbox} alt="" />
          <img src={shopify} alt="" />
        </div>
      </div>
    </div>
  );
}
