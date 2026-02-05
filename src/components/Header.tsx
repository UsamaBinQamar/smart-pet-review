import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-white/15"
      style={{
        backgroundImage:
          "radial-gradient(1200px 140px at 50% 0%, rgba(255,255,255,.06), rgba(255,255,255,0) 60%), linear-gradient(180deg, #050a17, #081026)",
      }}
    >
      <div className="container mx-auto px-5 md:px-6 h-24">
        <div className="flex h-full items-center justify-between gap-4">
          <a
            href="/"
            className="inline-flex items-center no-underline outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-xl"
            aria-label="Smart Pet Reviews home"
          >
            <img
              src="https://www.smartpetreviews.com/assets/img/logo.svg"
              alt="Smart Pet Reviews"
              className="h-12 w-auto md:h-[38px]"
            />
          </a>

          <button
            type="button"
            className="grid size-14 shrink-0 place-items-center rounded-xl bg-transparent text-white/90 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
            aria-label="Open menu"
          >
            <img
              src="/imgi_2_hamburger.svg"
              alt="Menu"
              className="h-5 w-8"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
