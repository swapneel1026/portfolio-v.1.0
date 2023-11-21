import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="text-white h-screen">
      <header className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Contact
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className=" mt-4 md:mt-16">
        <div className="flex flex-col">
          <p className="font-light text-center mt-4 lg:text-2xl">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <span className="text-[#0aff9d]">
              <Link href={"https://www.linkedin.com/in/swapneel-shubham"}>
                LinkedIn
              </Link>
            </span>{" "}
            or{" "}
            <span className="text-[#0aff9d]">
              <Link href={"https://instagram.com/neeel4642"}>Instagram</Link>
            </span>{" "}
            if that's more your speed.
          </p>
          <Link
            href={"mailto:swapneelshubham44@gmail.com"}
            className="flex flex-col md:flex-row mt-10 md:mt-0 items-center gap-2 mx-auto "
          >
            <EnvelopeClosedIcon
              height={"26"}
              width={"26"}
              className="text-[#0aff9d]"
            />
            <p className="text-xs md:text-xl">swapneelshubham44@gmail.com</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
