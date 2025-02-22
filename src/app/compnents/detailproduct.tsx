// app/page.tsx
import { useRef } from "react";
import Card from "./cardpage";

export default function PricingPage() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const cardsData = [
    {
      title: "Free",
      price: "0",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Personal",
      price: "11.99",
      description: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Organization",
      price: "49.99",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div
      id="pricing"
      className="min-h-screen flex flex-col items-center justify-center mb-12"
    >
      <div className=" gap-2 items-center flex flex-col justify-center text-center mb-10">
        <h3 className="text-[#212529] w-[288px]   font-sans text-[36px] font-bold leading-[43.57px] tracking-[-0.02em] text-center  md:w-[728px]  md:text-[54px] md:leading-[65.35px] lg:w-[979px] ">
          Choose Your Plan
        </h3>
        <p className="text-[#212529] w-[288px]  font-sans text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center md:w-[728px]  lg:w-[979px]">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="relative w-full max-w-6xl px-4">
        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden "
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden  "
        >
          ▶
        </button>

        {/* Cards Container */}
        <div
          ref={cardsContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-0"
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              description={card.description}
              features={card.features}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
