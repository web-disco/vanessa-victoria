import Link from "next/link";

interface CallToActionProps {
  title?: string;
  link: string;
  linkText: string;
}

const CallToAction = ({ title, link, linkText }: CallToActionProps) => {
  return (
    <div className="container text-center mb-10 lg:mb-20">
      {title && (
        <h3 className="font-tangerine text-[60px] max-w-[400px] mx-auto text-center text-brown leading-[60px]">
          {title}
        </h3>
      )}
      <Link href={link}>
        <a className="mt-8 font-fira font-light tracking-wide inline-block bg-sage py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
          {linkText}
        </a>
      </Link>
    </div>
  );
};

export default CallToAction;
