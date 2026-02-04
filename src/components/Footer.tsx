import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0b1324] text-white">
      <div className="container mx-auto px-5 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link
              to="/"
              className="inline-flex items-center no-underline outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-xl"
              aria-label="Smart Pet Reviews home"
            >
              <img
                src="https://www.smartpetreviews.com/assets/img/logo.svg"
                alt="Smart Pet Reviews"
                className="h-[38px] w-auto"
              />
            </Link>

            <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide">
              <Link to="/disclaimer" className="text-white/95 hover:text-white transition-colors">
                ADVERTISING &amp; MEDICAL DISCLAIMER
              </Link>
              <Link to="/privacy-policy" className="text-white/95 hover:text-white transition-colors">
                PRIVACY POLICY
              </Link>
              <Link to="/about" className="text-white/95 hover:text-white transition-colors">
                ABOUT US
              </Link>
            </nav>
          </div>

          <div className="mt-10 space-y-6 text-white/70 text-sm leading-relaxed">
            <p>
              [1] This review is sponsored by and we are affiliated with &quot;Pawfy&quot;, which is
              recommended in this review.
            </p>
            <p>
              The information contained within this site is not intended as a substitute for
              professional medical advice or veterinary advice. If your pet has, expects to have, or
              you suspect they may have any medical condition, you are urged to consult with a
              health care provider or vet. These statements have not been evaluated by the Food and
              Drug Administration. These products are not intended to diagnose, treat, cure, or
              prevent any diseases or medical conditions. Results are based on the SmartPetReviews
              System and do not necessarily reflect typical results from the use of these products
              nor do we guarantee the accuracy of our editorial content. Please visit product
              websites for more information.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
