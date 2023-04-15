import blog1 from "../assets/images/blog1.svg";
import blog2 from "../assets/images/blog2.svg";
import blog3 from "../assets/images/blog3.svg";
import blog4 from "../assets/images/blog4.svg";
import blog5 from "../assets/images/blog5.svg";

export default function Blog() {
  return (
    <div className="py-6 space-y-6 lg:py-12">
      <div>
        <h1 className="text-6xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-customViolet-500 to-customOrange-300">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="space-y-12 px-6 lg:grid lg:grid-cols-3 lg:space-y-0 lg:p-0 lg:gap-10">
        <div>
          <img className="block mx-auto" src={blog1} alt="" />
          <div className="space-y-6 bg-customBlack-700 p-4 lg:pb-64">
            <div>
              <p>Sep 26, 2021</p>
              <h3 className="text-xl font-extrabold">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </h3>
            </div>
            <p className="text-sm">Read Full Article</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 lg:block lg:space-y-14">
          <div>
            <img className="block mx-auto" src={blog2} alt="" />
            <div className="space-y-6 bg-customBlack-700 p-4 lg:mx-1.5 lg:p-4">
              <div>
                <p>Sep 26, 2021</p>
                <h3 className="text-lg font-extrabold">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <p className="text-sm">Read Full Article</p>
            </div>
          </div>
          <div>
            <img className="block mx-auto" src={blog3} alt="" />
            <div className="space-y-6 bg-customBlack-700 p-4 lg:mx-1.5 lg:p-4">
              <div>
                <p>Sep 26, 2021</p>
                <h3 className="text-lg font-extrabold">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <p className="text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 lg:block lg:space-y-14">
          <div>
            <img className="block mx-auto" src={blog4} alt="" />
            <div className="space-y-6 bg-customBlack-700 p-4 lg:mx-1.5 lg:p-4">
              <div>
                <p>Sep 26, 2021</p>
                <h3 className="text-lg font-extrabold">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <p className="text-sm">Read Full Article</p>
            </div>
          </div>
          <div>
            <img className="block mx-auto" src={blog5} alt="" />
            <div className="space-y-6 bg-customBlack-700 p-4 lg:mx-1.5 lg:p-4">
              <div>
                <p>Sep 26, 2021</p>
                <h3 className="text-lg font-extrabold">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <p className="text-sm">Read Full Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
