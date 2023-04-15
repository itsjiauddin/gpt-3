import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <div className="py-6 space-y-6 lg:py-12">
      <div className="space-y-6 lg:py-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-40">
        <div className="space-y-6">
          <img className="block mx-auto lg:inline" src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-extrabold">Links</p>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="space-y-3">
            <p className="font-extrabold">Company</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="space-y-3">
            <p className="font-extrabold">Get in touch</p>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
