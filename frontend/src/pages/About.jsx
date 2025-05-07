import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, your one-stop destination for quality products
            at unbeatable prices. Founded with a passion for delivering
            exceptional shopping experiences, we are committed to offering a
            wide range of handpicked items that combine style, functionality,
            and value. Whether you're browsing for the latest trends, daily
            essentials, or unique finds, we aim to make your online shopping
            journey seamless and satisfying.
          </p>
          <p>
            At Forever, customer satisfaction is our top priority—we're here to
            serve you with fast shipping, secure payment options, and friendly
            support every step of the way.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to make online shopping simple,
            enjoyable, and accessible for everyone. We strive to provide
            high-quality products at fair prices while delivering exceptional
            customer service. Our goal is to build a trusted platform where
            customers can discover new trends, shop with confidence, and feel
            valued every step of the way. We believe in continuous improvement,
            listening to our customers, and adapting to their needs to create a
            shopping experience that truly stands out.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Forever, quality is at the heart of everything we do. We
            carefully source our products from trusted suppliers and conduct
            thorough quality checks to ensure they meet our high standards. Each
            item is inspected for durability, performance, and craftsmanship
            before it reaches our customers. Our commitment to quality assurance
            means you can shop with confidence, knowing that every purchase is
            backed by our promise of excellence and customer satisfaction.
          </p>
        </div>
        <div className="border rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shopping at Forever is designed to be fast, easy, and stress-free.
            From intuitive navigation to secure checkout, every step of your
            shopping journey is optimized for your convenience. Browse a wide
            selection of products from the comfort of your home, track your
            orders in real time, and enjoy flexible payment options. We're here
            to save you time and effort—so you can focus on what matters most.
          </p>
        </div>
        <div className="border rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Forever, we believe great service makes all the difference. Our
            dedicated customer support team is always ready to help—whether you
            have a question about a product, need assistance with an order, or
            require post-purchase support. We pride ourselves on fast response
            times, friendly communication, and a customer-first mindset. Your
            satisfaction is our priority, and we're committed to providing a
            smooth, reliable, and pleasant shopping experience every time.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
