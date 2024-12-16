"use client";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Detailproduct from "./detailproduct";
import Link from "next/link";

export default function Management() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col  w-full max-w-screen-xl  items-center justify-center pt-[80px] pb-[80px] pl-[16px] pr-[16px]  lg:flex-row gap-10 lg:gap-10 xl:gap-20">
          <div className=" flex flex-col gap-10 justify-center text-center   lg:text-left">
            <div className=" flex flex-col gap-7 ">
              <h3 className="xm:text-[#212529] w-[288px]    font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px]  md:text-[54px] md:leading-[65.35px] lg:w-[436px]  lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                Project Management
              </h3>
              <p className="text-[#212529] w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[436px] lg:text-left xl:w-[630px]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div>
              <button className="w-[232px]  h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans lg:w-[219px]  lg:h-[63px] ">
                Get Started
              </button>
            </div>
          </div>

          <div className=" w-full max-w-[286px] md:max-w-[551px] lg:max-w-[526px] h-[191px] bg-[#C4DEFD]  md:h-[367px] lg:h-[350.45px] xl:w-bb[685px] xl:h-[456.39px]"></div>
        </div>

        <div className="flex flex-col w-full max-w-screen-xl items-center justify-center pt-[80px] pb-[80px] px-[16px] lg:flex-row lg:justify-between gap-10 lg:gap-10 xl:gap-20">
          {/* Text Section */}
          <div
            id="product"
            className="flex flex-col gap-10 justify-center text-center lg:text-left order-1 lg:order-2"
          >
            <div className="flex flex-col gap-7">
              <h3 className="text-[#212529] w-[288px] font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px] md:text-[54px] md:leading-[65.35px] lg:w-[527px] lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                Work together
              </h3>
              <p className="text-[#212529] w-[288px] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[527px] lg:text-left xl:w-[630px]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <div>
              <button className="w-[232px] h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans lg:w-[219px] lg:h-[63px]">
                Try it now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[280px] md:max-w-[454px] lg:max-w-[528px] order-2 lg:order-1">
            <Image
              src="/Work Together Image.svg"
              alt="image"
              layout="responsive"
              height={280}
              width={454}
              priority
            />
          </div>
        </div>
      </div>

      {/* component of pricing */}
      <div id="product" className="flex flex-col justify-center items-center">
        <div className="flex flex-col  w-full max-w-screen-xl  items-center justify-center pt-[80px] pb-[80px] pl-[16px] pr-[16px]  lg:flex-row gap-10 lg:gap-10 xl:gap-20">
          <div className=" flex flex-col gap-10 justify-center text-center   lg:text-left">
            <div className=" flex flex-col gap-7 ">
              <h3 className="xm:text-[#212529] w-[288px]    font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[704px]  md:text-[54px] md:leading-[65.35px] lg:w-[528px]  lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                Customise it to your needs
              </h3>
              <p className="text-[#212529] w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[528px] lg:text-left xl:w-[630px]">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </p>
            </div>
            <div>
              <button className="w-[232px]  h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans lg:w-[219px]  lg:h-[63px] ">
                Let’s Go
              </button>
            </div>
          </div>

          <div className=" w-full max-w-[286px] md:max-w-[551px] lg:max-w-[526px] h-[191px] bg-[#C4DEFD]  md:h-[367px] lg:h-[350.45px] xl:w-bb[685px] xl:h-[456.39px]"></div>
        </div>
      </div>
      <div>
        <Detailproduct />
      </div>
      <div className="items-center   pl-[16px] pr-[16px] pt-[80px] bg-[#043873] pb-[80px] justify-center flex flex-col ">
        <div className="  flex flex-col gap-10 justify-center text-left   lg:text-center">
          <div className="grid gap-10 ">
            <h4 className="text-[#ffffff] w-[288px] font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-left md:w-[604px] md:text-[54px] md:leading-[65.35px] lg:text-center xl:w-[1064px] xl:text-[72px]">
              Your work everywhere you are
            </h4>
            <p className="text-[#ffffff] w-[288px] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left md:w-[604px] lg:text-center xl:w-[1064px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div>
            <button className="w-[193px]   h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans md:w-[185px] md:h-[59px]">
              Try Taskey
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl items-center justify-center pt-[80px] pb-[80px] px-[16px]  lg:flex-row lg:justify-center gap-10 lg:gap-0 xl:gap-20">
          {/* Text Section */}
          <div className="flex flex-col gap-10 justify-center text-center lg:text-left order-2 lg:order-2">
            <div className="flex flex-col gap-7">
              <h3 className="text-[#212529] w-[288px] font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px] md:text-[54px] md:leading-[65.35px] lg:w-[526px] lg:text-[64px] lg:leading-[77.45px] lg:text-left xl:w-[594px]">
                100% your data
              </h3>
              <p className="text-[#212529] w-[288px] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[526px] lg:text-left xl:w-[630px]">
                The app is open source and your notes are saved to an open
                format, so you'll always have access to them. Uses End-To-End
                Encryption (E2EE) to secure your notes and ensure no-one but
                yourself can access them.
              </p>
            </div>
            <div>
              <button className="w-[232px] h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans lg:w-[219px] lg:h-[63px]">
                Read more
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[280px] md:max-w-[454px] lg:max-w-[562px] order-1 lg:order-2">
            <Image
              src="/Element2.svg"
              alt="image"
              layout="responsive"
              height={216}
              width={320}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  pt-[80px] pb-[80px] px-[16px] gap-10">
        <h3 className="text-[#212529] font-sans text-[36px] w-[288px]  font-bold leading-[43.57px] tracking-[-0.02em] text-center mb-6 md:w-[728px]  md:text-[54px] md:leading-[65.35px]">
          Our sponsors
        </h3>

        <div className="flex flex-col items-center gap-20  lg:flex-row lg:gap-35">
          <div className=" w-full max-w-[55.47px]">
            <Image
              src="/Apple.svg"
              alt="image"
              layout="responsive" // This makes the image responsive
              height={68} // Provide height and width for the image aspect ratio
              width={56}
              priority
            />
          </div>
          <div className=" w-full max-w-[213px] md:max-w-[287px]">
            <Image
              src="/Microsoft.svg"
              alt="image"
              layout="responsive" // This makes the image responsive
              height={46} // Provide height and width for the image aspect ratio
              width={214}
              priority
            />
          </div>

          <div className=" w-full max-w-[192px] md:max-w-[280px]">
            <Image
              src="/slack.svg"
              alt="image"
              layout="responsive" // This makes the image responsive
              height={49} // Provide height and width for the image aspect ratio
              width={190}
              priority
            />
          </div>

          <div className=" w-full max-w-[139.5px] md:max-w-[280px]">
            <Image
              src="/Google.svg"
              alt="image"
              layout="responsive" // This makes the image responsive
              height={47} // Provide height and width for the image aspect ratio
              width={140}
              priority
            />
          </div>
        </div>
      </div>

      <div className="pt-[80px] bg-[#043873] pb-[80px] pl-[16px] pr-[16px] ">
        <div className=" flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full max-w-[290.5px] md:max-w-[485px] lg:max-w-[522px] order-1 lg:order-2 ">
            <Image
              src="/Apps.svg"
              alt="image"
              layout="responsive" // This makes the image responsive
              height={216} // Provide height and width for the image aspect ratio
              width={320}
              priority
            />
          </div>

          <div
            id="resources"
            className="grid items-center justify-center text-center gap-10 lg:text-left order-1 lg:order-2"
          >
            <div className=" grid gap-5">
              <h3 className="text-[white] w-[288px] font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center md:w-[728px] md:text-[54px] md:leading-[65.35px] lg:w-[420px] lg:text-left">
                Work with Your Favorite Apps Using whitepace
              </h3>
              <p className="text-[white] w-[288px] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px] lg:w-[460px] lg:text-left">
                Whitepace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to have all the tools you need for
                your project success.
              </p>
            </div>
            <div>
              <button className="w-[200px]  h-[70px] rounded-[8px] bg-[#4F9CF9] text-white font-semibold font-sans md:w-[205px] md:h-[63px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row items-center justify-center pt-[80px] pb-[80px] px-[16px]">
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-[#01252A] font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center max-w-[1088px] md:text-[54px] md:leading-[65.35px]">
            See what our trusted users Say
          </h3>

          <div
            id="solution"
            className="w-[288px] bg-[#ffffff] shadow-custom rounded-[10px] p-[20px] md:w-[341.33px]"
          >
            <div className="grid gap-4 max-w-[301.33px]">
              <div className="w-full max-w-[70px]">
                <Image
                  src="/Avater 02.png"
                  alt="User avatar for Jessie"
                  layout="responsive"
                  height={70}
                  width={70}
                  priority
                />
              </div>

              <p className="text-[#01252A] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em]">
                “If you haven’t tried EventSprout yet, you need to give it a
                shot for your next event. It’s so easy and intuitive to get a
                new event setup, and if you need any help their customer service
                is seriously amazing.”
              </p>
            </div>

            <div className="mt-4">
              <p className="text-[#01252A] font-sans text-[18px] font-bold leading-[30px] tracking-[-0.02em]">
                Jessie Owner
              </p>
              <p className="text-[#01252A] font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em]">
                Founder, XYZ Company
              </p>
              <div className="mt-2">
                <Image
                  src="/btn-star.svg"
                  alt="Star rating icon"
                  height={15}
                  width={104}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20 pb-4 px-4 bg-[#043873] items-center gap-6 lg:gap-0">
        {/* Main Content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start text-center lg:text-left max-w-[1200px] w-full">
          {/* Logo and Description */}
          <div className="flex flex-col gap-5 items-center lg:items-start lg:w-1/4">
            <Image
              src="/Logowhite.svg"
              alt="Whitepace Logo"
              width={192}
              height={35}
              priority
              className="w-auto"
            />
            <p className="text-white text-base lg:text-lg font-normal leading-8 max-w-xs">
              Whitepace was created for the new ways we live and work. We make
              beautifully designed spaces around the world.
            </p>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "Products",
              links: ["Overview", "Pricing", "Customer Stories"],
            },
            {
              title: "Resources",
              links: ["Blog", "Guides & Tutorials", "Help Center"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Media Kit"],
            },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-2 lg:w-1/6 ">
              <h4 className="text-white text-lg lg:text-xl font-bold">
                {section.title}
              </h4>
              {section.links.map((link, idx) => (
                <p
                  key={idx}
                  className="text-white text-base lg:text-lg font-normal hover:opacity-80 cursor-pointer"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}

          {/* CTA Section */}
          <div className="flex flex-col gap-4 items-center lg:items-start lg:w-1/4">
            <h5 className="text-white text-xl lg:text-2xl font-bold">
              Try It Today
            </h5>
            <p className="text-white text-base lg:text-lg leading-8 max-w-sm">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-[#4F9CF9] text-white text-base lg:text-lg font-semibold py-4 px-8 rounded-lg hover:bg-[#3c85d9]">
              Start today
            </button>
          </div>
        </div>
        <div className="flex flex-col pl-[16px] pr-[16px] lg:flex-row items-center  justify-center lg:w-[1000px]  lg:justify-evenly lg:mt-10  border-t border-gray-400   lg:border-t max-w-[1280px] ">
          {/* Footer Links */}
          <div className="flex flex-col gap-3  mt-6 mb-6 justify-center text-center lg:flex-row lg:gap-6 text-white text-sm lg:text-lg font-normal">
            <p>Terms & Privacy</p>
            <p>Security</p>
            <p>Status</p>
            <p>&copy; 2021 Whitepace LLC.</p>
          </div>
          <div className="flex justify-center border-t border-gray-400  md:border-t lg:border-0">
            {/* Social Icons */}
            <div className="flex gap-6 pt-[10px]">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-white hover:opacity-80"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-white hover:opacity-80"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:opacity-80"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
