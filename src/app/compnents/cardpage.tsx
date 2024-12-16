// components/Card.tsx
import Image from "next/image";

type CardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  onButtonClick?: () => void; // Optional callback for button click
};

export default function Card({
  title,
  price,
  description,
  features,
  buttonText,
  onButtonClick,
}: CardProps) {
  return (
    <div className="w-[289px] h-auto bg-white shadow-custom rounded-lg p-5 flex flex-col justify-between items-start md:w-[472px]">
      {/* Header Section */}
      <div className="mb-6">
        <p className="text-[#043873] font-sans text-xl font-semibold mb-2">
          {title}
        </p>
        <h4 className="text-[#043873] font-sans text-4xl font-bold mb-2">
          ${price}
        </h4>
        <p className="text-[#043873] font-sans text-base">{description}</p>
      </div>

      {/* Features Section */}
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-[#043873]">
            <Image
              src="/Icon right.svg" // Replace with your icon path
              alt="icon"
              width={20}
              height={20}
              priority
            />
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className="w-[176px] h-14 bg-[#4F9CF9] text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
