import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f6f8]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Advertising &amp; Medical Disclaimer
              </h1>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                <p>
                  SmartPetReviews ranks and reviews products. This review is not exhaustive of all products on the market. This website is sponsored and we are affiliated with &quot;Pawfy&quot;. Sponsored content is clearly marked as &quot;Sponsored&quot;. Sponsored products may appear higher in our rankings. We may receive referral fees and we are affiliated with some brands we mention, such as Pawfy. For more information, see disclosure.
                </p>
                <p>
                  The reviews and rankings on this website are not objective. They represent the subjective opinion of the writer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
