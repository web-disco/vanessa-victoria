import { PageBannerProps } from "../../interfaces/PageBannerProps";

const PageBanner = ({ type }: PageBannerProps) => {
  return (
    <div className="min-h-[250px] md:min-h-[400px] flex items-center justify-center font-tangerine text-4xl md:text-6xl text-white bg-sage mb-20">
      <p>{type && type.charAt(0).toUpperCase() + type.slice(1)}</p>
    </div>
  );
};

export default PageBanner;
