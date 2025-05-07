import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        /> */}

        <iframe
          className="w-full md:max-w-[480px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24190.724799709868!2d-74.0160894113282!3d40.721525394529756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259885419838b%3A0x2d39c2f6ed6db3c!2sLower%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1746601932058!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            123 Commerce Street, Suite 456,
            <br /> Downtown District, New York, NY 10001, USA
          </p>
          <p className="text-gray-500">
            Phone: (123) 456-7890 <br />
            Email: support@yourstorename.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border border-black px-8 rounded-xl py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
