import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-[25px]">
      <div className="text-center">
        <h1 className="text-[80px] font-tangerine text-brown mb-2">
          Thank You!
        </h1>
        <p className="font-fira font-light max-w-[400px] text-[18px] mb-10">
          Someone from our team will reach back out to you within the next 24-48
          hours.
        </p>
        <Link href="/">
          <a className="block sm:max-w-[200px] mx-auto text-center mt-8 font-fira font-light tracking-wide bg-sage py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
