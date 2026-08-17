import CreatedBy from "@/components/common/CreatedBy";
import Logo from "@/components/common/Logo";
import { links } from "@/data/links";
import Connect from "./Connect";
import FooterLinks from "./FooterLinks";
import QrCode from "./QrCode";
import Waves from "./Waves";

export default function Footer() {
  return (
    <footer className="bg-secondary relative">
      {/* Waves */}
      <Waves />
      <div className="container flex flex-col justify-between gap-4 pt-4 pb-10 sm:grid sm:grid-cols-4 sm:gap-6 sm:py-10 xl:grid-cols-5">
        <div className="col-span-2 flex w-full flex-col gap-2">
          {/* MY LOGO */}
          <Logo loading="lazy" />

          {/* FRONTEND DEVELOPER */}
          <span className="text-xl font-extrabold">Frontend Developer</span>

          {/* CAPTION */}
          <p className="text-light/70 w-full text-sm sm:w-[70%]">
            Crafted with passion, powered by code — turning ideas into seamless,
            responsive experiences one line at a time.
          </p>
        </div>

        {/* QUICK LINKS */}
        <FooterLinks title="Quick Access" links={links} />
        {/* QR CODE */}
        <QrCode />
        {/* CONNECT */}
        <Connect />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
