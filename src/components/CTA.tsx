import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="   ">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading-image">
            Editor’s Choice
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link to="/article/digestive-health-immunity" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-hidden">
              <img
                src="/editors-choice-3.png"
                alt="How to Improve Digestive Health & Immunity in Dogs"
                className="w-full h-[170px] object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How to Improve Digestive <br />
                Health &amp; Immunity in Dogs
              </h3>
            </div>
          </Link>

          <Link to="/article/separation-anxiety" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-hidden">
              <img
                src="/editors-choice-2.png"
                alt="How To Deal With Separation Anxiety in Dogs"
                className="w-full h-[170px] object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How To Deal With Separation <br />
                Anxiety in Dogs
              </h3>
            </div>
          </Link>

          <Link to="/article/skin-coat" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-hidden">
              <img
                src="/editors-choice-1.png"
                alt="How to Maintain Your Dog's Skin & Coat"
                className="w-full h-[170px] object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="card-title-image">
                How to Maintain Your Dog&apos;s <br />
                Skin &amp; Coat
              </h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Food & Nutrition – same size/structure as About section */}
      <div className="food-nutrition-section pt-12 pb-0 mt-8 bg-[#EDF5FF] py-24">
        <div className="container mx-auto px-6 py-24 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-heading-image">
              Food &amp; Nutrition
            </h2>
          </motion.div>

          <div className="food-nutrition-cards mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link to="/article/joint-health-mobility" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent">
              <div className="overflow-hidden">
                <img
                  src="/food-nutrition-1.png"
                  alt="How to Improve Joint Health & Mobility in Dogs"
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  How to Improve Joint Health &amp; <br />
                  Mobility in Dogs
                </h3>
              </div>
            </Link>

            <Link to="/article/healthy-eyes-clear-vision" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent">
              <div className="overflow-hidden">
                <img
                  src="/food-nutrition-2.png"
                  alt="Your Dog Needs Healthy Eyes and Clear Vision"
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  Your Dog Needs Healthy Eyes <br />
                  and Clear Vision
                </h3>
              </div>
            </Link>

            <Link to="/article/supplements-help-your-dog" className="mx-auto w-full max-w-[360px] block transition-all hover:opacity-90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#316DFF] focus-visible:ring-offset-2 rounded-xl overflow-hidden bg-transparent">
              <div className="overflow-hidden">
                <img
                  src="/food-nutrition-3.png"
                  alt="How Can Supplements Help Your Dog?"
                  className="w-full h-[170px] object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="card-title-image">
                  How Can Supplements Help <br />
                  Your Dog?
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
