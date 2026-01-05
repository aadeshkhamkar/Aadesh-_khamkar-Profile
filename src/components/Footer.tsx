import { ArrowUpCircle } from "lucide-react";
import logo from "../assets/Home-Logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-4
                        grid-cols-1
                        lg:grid-cols-3">

          {/* LEFT LOGO */}
          <div className="flex justify-center lg:justify-start">
            <a href="#home">
              <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full backdrop-blur-md border">
                <img
                  src={logo}
                  alt="Logo"
                  className="object-cover scale-[1.8]"
                />
              </div>
            </a>
          </div>

          {/* CENTER TEXT – FORCE TRUE CENTER */}
          <p className="text-center animate-blur-reveal text-xs leading-relaxed text-white font-serif">
            © Design and developed by Aadesh Khamkar {new Date().getFullYear()}
          </p>

          {/* RIGHT BUTTON */}
          <div className="hidden lg:flex justify-end">
            <button
              onClick={scrollToTop}
              className="rounded-full border border-white/20 p-2 text-muted-foreground transition hover:text-white hover:border-gold/50"
              aria-label="Back to top"
            >
              <ArrowUpCircle size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
