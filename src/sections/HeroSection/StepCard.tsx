import { Heading } from "@/src/components/Heading";
import Image from "next/image";
import { ReactNode } from "react";

interface StepCardProps {
  icon?: ReactNode;
  step?: number;
  title: string;
  description?: string;
  image?: string
}

const StepCard: React.FC<StepCardProps> = ({ icon, step, title, description, image }) => {
  return (
    <div className="w-full rounded-[32px] flex flex-col gap-4 p-3 bg-white shadow-custom-lg lg:border-[1px] lg:border-[#DAE4F2]">
      {/* <Image src={`${image}`} alt={title} width={508} height={498} className="w-full min-h-[280px] max-h-[498px] h-auto object-cover rounded-t-[24px] md:aspect-square" /> */}
      <Image src={`${image}`} alt={title} width={200} height={498} className="w-full min-h-[280px] max-h-[498px] h-auto object-cover rounded-t-[24px] md:aspect-square" />
      <div className="w-full flex flex-col gap-3 lg:px-6">
        <Heading type="h3" className="flex items-center gap-4">
          {icon} <span className="bg-textGradient bg-clip-text text-transparent">{step}—{title}</span>
        </Heading>
        <p className="w-full lg:max-w-[400px] font-Montserrat font-normal text-base lg:text-[18px] leading-[150%] tracking-[24%] uppercase text-[#7C899C]">{description}</p>
      </div>
    </div>
  );
};

export default StepCard