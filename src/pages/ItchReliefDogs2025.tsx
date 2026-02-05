import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Simple checkmark icon (no lucide dependency) */
const CheckIcon = ({ className = "h-5 w-5", strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/** X icon for cons */
const XIcon = ({ className = "h-5 w-5", strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/** Close icon for modal */
const CloseIcon = ({ className = "h-6 w-6", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/** Badge check icon for ingredient list */
const BadgeCheckIcon = ({ className = "h-7 w-7", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.2 15.3A4 4 0 0 1 4 12a4 4 0 0 1 3.2-3.7 4 4 0 0 1 3.6-5.4 4 4 0 0 1 6.4 0 4 4 0 0 1 3.6 5.4A4 4 0 0 1 20 12a4 4 0 0 1-3.2 3.7 4 4 0 0 1-3.6 5.4 4 4 0 0 1-6.4 0 4 4 0 0 1-3.6-5.4z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/**
 * Combined page: The Best 5 Itch-Relief For Dogs in 2025
 * All sections from the provided screenshots and copy in one page.
 */
const ItchReliefDogs2025 = () => {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [isCouponVisible, setIsCouponVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDisclosureOpen) {
        setIsDisclosureOpen(false);
      }
    };

    if (isDisclosureOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isDisclosureOpen]);

  const openDisclosure = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDisclosureOpen(true);
  };

  const closeDisclosure = () => {
    setIsDisclosureOpen(false);
  };

  const closeCoupon = () => {
    setIsCouponVisible(false);
  };

  return (
    <div id="top" className="mt-16 article-page min-h-screen bg-[#EDF5FF]" style={{ overflow: "visible" }}>
      <Header />

      {/* Disclosure Modal */}
      {isDisclosureOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-in fade-in duration-200"
          onClick={closeDisclosure}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0b1324]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Disclosure</h2>
              <button
                onClick={closeDisclosure}
                className="text-[#666] hover:text-[#0b1324] transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close disclosure"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="text-base leading-relaxed text-[#222] space-y-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <p>
                SmartPetReviews is a website which ranks and reviews certain products. It does not review all products in a specific category and our reviews are not exhaustive. It is also important to note that this website is sponsored and affiliated with Pawfy. Any products for which we receive compensation to rank or review will be marked as &quot;Sponsored&quot;. All opinions or judgements are purely the subjective opinion of our writers.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero pt-12 md:pt-24 pb-6 md:pb-16 px-4 md:px-8 flex flex-col items-center" style={{ background: '#EDF5FF', textAlign: 'center' }}>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          {/* Main Title */}
          <h1 className="text-[28px] md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6" style={{ color: "#0b1324", fontFamily: 'Satoshi, sans-serif', fontWeight: 800 }}>
            The Best 5 Itch-Relief<br />
            For Dogs in 2025
          </h1>

          {/* Subtitle */}
          <h4 className="text-[14px] md:text-base text-[#222] leading-relaxed mb-4 md:mb-8 font-normal max-w-md md:max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Discover the most effective products to stop your dog from itching, scratching, dry skin &amp; more!
          </h4>

          {/* Skip To Navigation */}
          <ul className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8 list-none pl-0 max-w-md md:max-w-none mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <li>
              <span className="text-sm md:text-base font-semibold text-[#0b1324] mr-2">Skip To:</span>
            </li>
            <li>
              <a
                href="#top5"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Top 5
              </a>
            </li>
            <li>
              <a
                href="#definitive"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Product Checklist
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#C7D5F2] bg-[#EAF2FF] text-[#0b1324] text-sm md:text-base font-semibold hover:bg-[#DDE9FF] transition-colors shadow-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Benefits
              </a>
            </li>
          </ul>

          {/* Advertising Disclaimer */}
          <div className="rounded-lg border border-[#8FA3BF] overflow-hidden max-w-md md:max-w-3xl mx-auto text-center bg-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <div className="bg-[#EAF2FF] py-2 px-4">
              <span className="font-bold uppercase text-[12px] md:text-sm text-[#1F2A3A] tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                ADVERTISING DISCLAIMER
              </span>
            </div>
            <div className="py-3 px-4 text-[12px] md:text-sm text-[#333] leading-relaxed">
              This is a subjective round-up and it is not exhaustive of all products on the market. We may receive referral fees and we are affiliated with some brands we mention, such as Pawfy. For more information, see <a href="#" onClick={openDisclosure} className="disclosure-popup underline cursor-pointer text-[#316DFF] hover:text-[#1e4ed8] transition-colors">disclosure.</a>
            </div>
          </div>
        </div>
      </section>

      <article className="pt-8 pb-16 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto px-5 md:px-6">
          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <p className="text-sm text-[#666]">Updated on 02/02/2026</p>

            {/* Section: The Importance of Stopping Your Dog From Itching */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                The Importance of Stopping Your Dog From Itching
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#222]">
                <p>
                  <mark className="bg-yellow-200 px-1">Your dog&apos;s coat is an indicator of their overall health</mark>, as well as having an important role to play in actually keeping your dog healthy. A healthy glossy coat forms a barrier of protection against harmful elements from the environment. <mark className="bg-yellow-200 px-1">Poor skin can cause pain, discomfort, itchiness and even lead to infections and damage.</mark>
                </p>
                <p>
                  The dangers of letting your dog itch and scratch unabated are numerous. Besides the fact that itchy skin is very uncomfortable for your dog, it can also cause secondary health issues, since their skin forms a vital part of their immune system.
                </p>
                <p>
                  Luckily, many skin or itching issues <mark className="bg-yellow-200 px-1">can be helped by</mark> giving your dog a high-quality supplement. Read on to discover our Top 5 Itch Relief Products.
                </p>
              </div>
            </section>

            {/* Section: Symptoms of Unhealthy Skin & Coat */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Symptoms of Unhealthy Skin &amp; Coat
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222]">
                There are lots of ways to tell if your dog has unhealthy skin and coat problems. Look out for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-start">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2 text-[#222]">
                  <li><mark className="bg-yellow-200 px-1">Itchiness and irritation</mark></li>
                  <li>Redness &amp; bald spots</li>
                  <li><mark className="bg-yellow-200 px-1">Repetitive licking or scratching</mark></li>
                  <li>Swelling or inflammation</li>
                  <li>Dry, flaky skin and dandruff</li>
                  <li>Hair loss or shedding.</li>
                </ul>
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/dog-first.b4ef431c.jpg"
                    alt="Dog with collar"
                    className="w-full max-w-[300px] md:max-w-[250px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>

          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: Benefits of Dog Skin Supplements */}
            <section id="benefits" className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Benefits of Dog Skin Supplements
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222] max-w-3xl mx-auto">
                There is a large amount of scientific research highlighting the benefits of supplements for dogs in supporting itching and boosting skin health.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                High Quality Dog Skin Supplements Can:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { text: "Support itching & scratching", highlight: true },
                  { text: "Hydrate & moisturize skin", highlight: false },
                  { text: "Support inflammation & redness", highlight: true },
                  { text: "Add shine to their coat", highlight: false },
                  { text: "Reduce shedding and hair loss", highlight: true },
                  { text: "Soften the coat", highlight: false },
                  { text: "Support immune system", highlight: true },
                ].map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#DDEBFF] border border-[#C7D7F2] text-left"
                  >
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CFE0FF]" aria-hidden>
                      <CheckIcon className="h-4 w-4 text-[#2F5BD7]" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-[#1E2A3B] leading-snug">
                      {benefit.highlight ? (
                        <mark className="bg-yellow-200 px-1">{benefit.text}</mark>
                      ) : (
                        benefit.text
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: What To Look For In Dog Skin Supplements */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-[#62C48F]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                What To Look For In Dog Skin Supplements
              </h2>
              <p className="mb-8 text-base md:text-lg leading-relaxed text-[#222] max-w-3xl mx-auto">
                It can be confusing to determine which natural ingredients to look for in a supplement We recommend:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {[
                  {
                    name: "Omega 3",
                    desc: "Choose supplements which provide omega 3 and 6 from salmon oil.",
                  },
                  {
                    name: "Primrose Oil",
                    desc: "Primrose oil is rich in Vitamin E to alleviate itchy skin.",
                  },
                  {
                    name: "Turmeric",
                    desc: "Turmeric is an anti-oxidant and anti-inflammatory that can reduce redness and swelling.",
                  },
                  {
                    name: "Sunflower Oil",
                    desc: "This oil locks in moisture and delivers Vitamin E to reduce itching and hydrate the skin.",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <img
                        src="/check-good.svg"
                        alt=""
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                      <h4 className="font-bold text-[#111] text-base md:text-lg">
                        <mark className="bg-yellow-200 px-1">{item.name}</mark>
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-[#333] leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 space-y-8 text-[#222] mt-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {/* Section: Your Definitive Checklist For Dog Skin Supplements */}
            <section id="definitive">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Your Definitive Checklist For Dog Skin Supplements
              </h2>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-[#222]">
                These are some signs of a good quality product and may{" "}
                <strong>improve your chances of seeing results:</strong>
              </p>
              <details open className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <summary className="cursor-pointer text-sm md:text-base font-semibold text-[#316DFF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Close/Open the Checklist
                </summary>
                <div className="mt-5 space-y-6">
                  {[
                    {
                      title: "Multiple Types of Oil",
                      desc: "Salmon, Primrose & Sunflower oil are the excellent ingredients that have been shown to reduce itching & hydrate the skin.",
                    },
                    {
                      title: "Money Back Guarantee",
                      desc: "Brands with a 30 day money back guarantee commonly have higher quality products and lower risk.",
                    },
                    {
                      title: "Additional Ingredients",
                      desc: "Look for supplements that add highly beneficial ingredients, such as Turmeric which can bring further benefits.",
                    },
                    {
                      title: "Made in USA",
                      desc: "We recommend companies that manufacture in the USA to ensure your product follows safety regulations.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="flex-shrink-0 text-[#316DFF]" aria-hidden>
                        <CheckIcon className="h-5 w-5" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h4 className="font-bold text-[#222] text-base mb-1">{item.title}</h4>
                        <p className="text-[0.9375rem] md:text-base text-[#444] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>
          </div>



          {/* Section: Top 5 Dog Skin & Coat Supplements */}
          <section id="top5" className="mt-12 w-full">
            <div className="w-full px-5 md:px-6">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-[#666] text-center mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Top 5
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-8 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Top 5 Dog Skin &amp; Coat Supplements of 2025
              </h2>

              {/* Product Card: Pawfy */}
              <div className="bg-white rounded-xl border-2 border-[#5FCE92] p-6 md:p-8 mb-8 relative pt-12 md:pt-14 shadow-sm">
                {/* Badge */}
                <div className="absolute left-6 -top-10">
                  <img src="/imgi_11_badge.svg" alt="SmartPetReviews Badge" className="h-20 md:h-24 w-auto" />
                </div>

                {/* Product Title */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Skin &amp; Coat <span className="text-[#316DFF] text-base align-super">[ 1 ]</span>
                  </h3>
                  <p className="text-lg text-[#316DFF] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    by Pawfy
                  </p>
                  <p className="text-sm text-[#666] mt-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Sponsored — This is a sponsored recommendation by our affiliated partner.
                  </p>
                </div>

                {/* Three Column Layout: Grade, Image, Ranking */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-center">
                  {/* Overall Grade */}
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      A+
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Overall Grade
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="flex justify-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <img
                      src="/Skin-1.webp"
                      alt="Pawfy Skin & Coat Supplement"
                      className="h-48 md:h-56 w-auto object-contain"
                    />
                  </div>

                  {/* Total Ranking */}
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="flex justify-center mb-2">
                      <img src="/imgi_14_gauge-1.svg" alt="Rating Gauge 9.7/10" className="h-24 md:h-28 w-auto" />
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Total Ranking
                    </div>
                  </div>
                </div>

                {/* Pros and Cons / The Bottom Line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column: Pros and Cons */}
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros:</h4>
                    <ul className="space-y-3 mb-6">
                      {[
                        { text: "Contains Omega 3 & 6", highlight: true },
                        { text: "Contains Sunflower + Primrose Oil", highlight: true },
                        { text: "Includes Turmeric", highlight: true },
                        { text: "Made in USA from US & Global Ingredients", highlight: false },
                        { text: "Treat Form", highlight: false },
                        { text: "30 Day Money Back Guarantee", highlight: false },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className={`text-base text-[#222] ${item.highlight ? 'bg-yellow-200 px-1' : ''}`} style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons:</h4>
                    <ul className="space-y-3">
                      {[
                        "Only Available Online",
                        "Sometimes Out of Stock",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: The Bottom Line */}
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                    <div className="space-y-4 text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      <p>
                        Of all dog skin &amp; coat supplements that we tested on the market,{" "}
                        <a href="#" className="text-[#316DFF] font-bold underline">Pawfy&apos;s Vet-Recommended Skin &amp; Coat Chews</a> are the clear winner.
                      </p>
                      <p>
                        With a powerful blend of <strong>3 oils</strong>, Salmon, Primrose and Sunflower, these chews contain a potent dose of highly beneficial ingredients and{" "}
                        <mark className="bg-yellow-200 px-1">have shown superior efficacy for dog owners</mark> looking to solve a range of symptoms.
                      </p>
                      <p>
                        By using multiple types of healthy oils, Pawfy&apos;s Skin &amp; Coat chews come with a wider range of benefits than competing products.
                      </p>
                      <p>
                        In our testing, Pawfy&apos;s chews contained{" "}
                        <mark className="bg-yellow-200 px-1">one of the highest doses of Omega 3</mark> and included Turmeric, a powerful anti-oxidant and anti-inflammatory.
                      </p>
                      <p>
                        <mark className="bg-yellow-200 px-1">The turmeric in the formula aids in absorption and helps combat inflammation, irritation and hot spots on the skin.</mark>
                      </p>
                      <p>
                        Pawfy is <mark className="bg-yellow-200 px-1">Made in the USA from US &amp; Global Ingredients</mark> and comes with a{" "}
                        <mark className="bg-yellow-200 px-1">30 Day Money Back Guarantee + Free Shipping</mark>. This helps ensure the safety and accuracy of their ingredients and allows dog owners to try them risk-free.
                      </p>
                      <p>
                        Overall, we have rated Pawfy as having the <mark className="bg-yellow-200 px-1">best Skin &amp; Coat supplement on the market in 2025</mark> from all those that we tested.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-[#666] mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>

                {/* Visit Website Button */}
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 rounded-full bg-[#5AA247] text-white font-bold text-base hover:bg-[#4a8f3c] transition-colors shadow-sm"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    VISIT WEBSITE &gt;&gt;
                  </a>
                </div>
              </div>

              {/* Product Card: Evening Skin+Coat by Reggie */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Evening Skin+Coat
                  </h3>
                  <p className="text-lg text-[#316DFF] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    by Reggie
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-center">
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      B+
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Overall Grade
                    </div>
                  </div>

                  <div className="flex justify-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <img
                      src="/imgi_18_Skin-2.webp"
                      alt="Reggie Evening Skin+Coat"
                      className="h-48 md:h-56 w-auto object-contain"
                    />
                  </div>

                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="flex justify-center mb-2">
                      <img src="/imgi_19_gauge-2.svg" alt="Rating Gauge 8.4/10" className="h-24 md:h-28 w-auto" />
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Total Ranking
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros:</h4>
                    <ul className="space-y-3 mb-6">
                      {["Contains Omega", "Includes Vitamin E", "Treat Form", "Made in USA from US & Global Ingredients"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons:</h4>
                    <ul className="space-y-3">
                      {["No Primrose Oil", "No Turmeric", "No Sunflower Oil"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                    <div className="space-y-4 text-base leading-relaxed text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      <p>
                        Reggie is a dog wellness brand and their skin &amp; coat supplement is well-rated. Their product contains a simple formula of just 2 active ingredients, Vitamin E &amp; Omega 3.
                      </p>
                      <p>
                        Vitamin E is known to be beneficial for overall skin health meanwhile their Omega 3 may help soften rough skin. Their formula does not contain any other active ingredients however.
                      </p>
                      <p>
                        In addition, their Omega 3 is sourced from Fish Oil but it does not specify which type of fish, which may be worth knowing as some sources, such as Salmon, may be more beneficial or richer in nutrients.*
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#666] mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    READ MORE
                  </a>
                </div>
              </div>

              {/* Product Card: Skin & Coat Chews by Akoma Pet Labs */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Skin &amp; Coat Chews
                  </h3>
                  <p className="text-lg text-[#316DFF] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    by Akoma Pet Labs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-center">
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      B
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Overall Grade
                    </div>
                  </div>

                  <div className="flex justify-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <img
                      src="/imgi_20_Skin-3.webp"
                      alt="Akoma Pet Labs Skin & Coat Chews"
                      className="h-48 md:h-56 w-auto object-contain"
                    />
                  </div>

                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="flex justify-center mb-2">
                      <img src="/imgi_21_gauge-3.svg" alt="Rating Gauge 8.1/10" className="h-24 md:h-28 w-auto" />
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Total Ranking
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros:</h4>
                    <ul className="space-y-3 mb-6">
                      {["Made in USA", "Fast Shipping", "Flavoured"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons:</h4>
                    <ul className="space-y-3">
                      {["Unknown Brand", "Not Formulated With Primrose Oil or Turmeric", "No Moneyback Guarantee"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                    <div className="space-y-4 text-base leading-relaxed text-[#222] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      <p>
                        These flavoured chews contain good quality, science backed ingredients. However, it fails to include Primrose Oil or Turmeric, both of which are essential in reviving your dogs coat, and in soothing sores on the skin. Furthermore, the brand has little reputation or reviews and they provide no moneyback guarantee.
                      </p>
                    </div>
                    <p className="text-xs text-[#666] mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                    </p>
                    <div className="text-center">
                      <a
                        href="#"
                        className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card: Salmon Oil Soft Chews by Paws & Pals */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Salmon Oil Soft Chews
                  </h3>
                  <p className="text-lg text-[#316DFF] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    by Paws &amp; Pals
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-center">
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      C
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Overall Grade
                    </div>
                  </div>

                  <div className="flex justify-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <img
                      src="/imgi_22_Skin-4.webp"
                      alt="Paws & Pals Salmon Oil Soft Chews"
                      className="h-48 md:h-56 w-auto object-contain"
                    />
                  </div>

                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="flex justify-center mb-2">
                      <img src="/imgi_23_gauge-4.svg" alt="Rating Gauge 7.6/10" className="h-24 md:h-28 w-auto" />
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Total Ranking
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros:</h4>
                    <ul className="space-y-3 mb-6">
                      {["Grain Free", "Made in USA"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons:</h4>
                    <ul className="space-y-3">
                      {["High Oil Content Causes Diarrhea", "Not Formulated With Turmeric"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                    <div className="space-y-4 text-base leading-relaxed text-[#222] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      <p>
                        The main benefit of this supplement is that they are grain free, however, it falls short on numerous fronts. Firstly, it contains a very high oil concentration, which could cause diarrhea in dogs. Furthermore, it lacks turmeric which is essential in soothing sores and itching on the skin. It does however contain Omega 3 which is proven to add shine to the coat and helps restore the skin.
                      </p>
                    </div>
                    <p className="text-xs text-[#666] mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                    </p>
                    <div className="text-center">
                      <a
                        href="#"
                        className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card: Omega Health Chews by PetGo! */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Omega Health Chews
                  </h3>
                  <p className="text-lg text-[#316DFF] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    by PetGo!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 items-center">
                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      D+
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Overall Grade
                    </div>
                  </div>

                  <div className="flex justify-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <img
                      src="/imgi_24_Skin-5.webp"
                      alt="PetGo! Omega Health Chews"
                      className="h-48 md:h-56 w-auto object-contain"
                    />
                  </div>

                  <div className="text-center bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <div className="flex justify-center mb-2">
                      <img src="/imgi_25_gauge-5.svg" alt="Rating Gauge 6.9/10" className="h-24 md:h-28 w-auto" />
                    </div>
                    <div className="text-sm font-semibold text-[#666] uppercase tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Total Ranking
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pros:</h4>
                    <ul className="space-y-3 mb-6">
                      {["Made in USA", "Contains Omega 3 & 6", "Easy To Feed To Dogs"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src="/check-good.svg" alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Cons:</h4>
                    <ul className="space-y-3">
                      {["High Oil Content Causes Diarrhea", "Poor Quality Product", "Bad Value For Money"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-red-500 mt-0.5" aria-hidden>
                            <XIcon className="h-5 w-5" strokeWidth={2.5} />
                          </span>
                          <span className="text-base text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E5ECF4] shadow-sm p-6">
                    <h4 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Bottom Line</h4>
                    <div className="space-y-4 text-base leading-relaxed text-[#222] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      <p>
                        While this product also has a high oil content, it does at least contain both Omega 3 &amp; 6, which are critical in restoring your dogs coat. It does however fall short on the dosages of it&apos;s active ingredients, which result in bad value for money and could also impact it&apos;s effectiveness.
                      </p>
                    </div>
                    <p className="text-xs text-[#666] mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      * Results and rankings are based on our subjective opinion and do not necessarily reflect typical results from the use of these products. We receive compensation from &quot;Sponsored&quot; products which may influence their position. Please visit product website for more information.
                    </p>
                    <div className="text-center">
                      <a
                        href="#"
                        className="inline-block px-10 py-3 border-2 border-[#5AA247] bg-white text-[#888] font-bold text-base rounded-full hover:bg-[#F3F8F5] transition-colors"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <a href="#top5" className="text-sm md:text-base font-semibold text-[#316DFF] underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Skip To Top 5
                </a>
              </div>

              {/* Our Recommendation Section */}
              <div className="bg-[#EDF5FF] rounded-xl p-6 md:p-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Our Recommendation
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-8 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Top Dog Skin &amp; Coat Supplement of 2025
                </h3>
                <p className="text-center text-sm text-[#666] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Sponsored — This is a sponsored recommendation by our affiliated partner.
                </p>
                <div className="bg-white rounded-xl border-2 border-[#4D6DD7] p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src="/Skin-1.webp"
                        alt="Pawfy Skin & Coat Supplement"
                        className="h-32 md:h-40 w-auto object-contain"
                      />
                    </div>
                    <ul className="text-sm md:text-base font-semibold text-[#0b1324] space-y-2 text-left">
                      {[
                        { label: "Effectiveness", grade: "A+" },
                        { label: "Ingredients", grade: "A+" },
                        { label: "Value for Money", grade: "A+" },
                        { label: "Customer Service", grade: "A+" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-center justify-between gap-4 bg-[#F5FAFF] border border-[#DCEBFF] rounded-md px-3 py-2 min-w-[220px]">
                          <span>{item.label}</span>
                          <span className="text-[#316DFF]">{item.grade}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex-1 text-left">
                      <h4 className="text-xl md:text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        Pawfy Skin &amp; Coat Supplements
                      </h4>
                      <p className="text-base md:text-lg leading-relaxed text-[#222] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        Overall, <a href="#" className="text-[#316DFF] underline">Pawfy&apos;s Skin &amp; Coat Supplements</a> provide the best bang for your buck. With science-backed ingredients which have been thoroughly-researched, they also come with a money-back guarantee and free shipping. We highly recommend these to support a wide range Skin &amp; Coat problems or for long term prevention.
                      </p>
                      <div className="text-center md:text-left">
                        <a
                          href="#"
                          className="inline-block px-8 py-4 bg-[#5FCE92] text-white font-bold text-lg rounded-lg hover:bg-[#4db87a] transition-colors"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}
                        >
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Feature Icons */}
                  <div className="bg-[#E8F4FC] rounded-lg p-4 md:p-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-3xl mb-2">🇺🇸</div>
                        <p className="text-sm md:text-base font-semibold text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                          MADE IN U.S.A
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-3xl mb-2">💰</div>
                        <p className="text-sm md:text-base font-semibold text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                          MONEY-BACK GUARANTEE
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-3xl mb-2">🚚</div>
                        <p className="text-sm md:text-base font-semibold text-[#222]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                          FREE SHIPPING
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources Section */}
              <div className="mt-8 mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Sources:
                </h2>
                <ul className="space-y-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  <li>
                    <a href="https://academic.oup.com/jn/article/128/12/2730S/4724343" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      1. https://academic.oup.com/jn/article/128/12/2730S/4724343
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6766488/" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      2. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6766488/
                    </a>
                  </li>
                  <li>
                    <a href="https://www.akc.org/expert-advice/nutrition/probiotics-for-dogs/" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      3. https://www.akc.org/expert-advice/nutrition/probiotics-for-dogs/
                    </a>
                  </li>
                  <li>
                    <a href="https://vcahospitals.com/know-your-pet/probiotics" target="_blank" rel="noopener noreferrer" className="text-[#316DFF] underline text-sm md:text-base">
                      4. https://vcahospitals.com/know-your-pet/probiotics
                    </a>
                  </li>
                </ul>
                <p className="text-xs text-[#666] mt-4 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  [1] This review is sponsored by and we are affiliated with &quot;Pawfy&quot;, which is recommended in this review.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <a
        href="#top"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#DCEBFF] px-4 py-2 text-sm font-semibold text-[#316DFF] shadow-md hover:bg-white"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
        aria-label="Return to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        Return to Top
      </a>

      {isCouponVisible && (
        <div className="fixed bottom-6 right-6 z-40 max-w-xs w-full bg-white rounded-xl border border-[#DCEBFF] shadow-xl p-4 md:p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="text-sm md:text-base font-bold text-[#0b1324]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              We Found a Coupon For #1! Get 10% off with code: <span className="text-[#316DFF]">10OFF</span>
            </h4>
            <button
              type="button"
              onClick={closeCoupon}
              className="text-[#666] hover:text-[#0b1324] transition-colors"
              aria-label="Close coupon"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-[#5FCE92] text-white font-bold text-sm hover:bg-[#4db87a] transition-colors"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Claim Offer
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ItchReliefDogs2025;
