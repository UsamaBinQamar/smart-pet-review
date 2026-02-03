import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section bg-[#f5f6f8] pt-24 w-full" style={{ overflow: 'visible' }}>
      <div className="container mx-auto px-5 md:px-6">
        {/* Most Recent Reviews – above the grid, left side, always visible */}
        <h2
          id="most-recent-reviews"
          className="mb-6 block w-full text-left"
          style={{
            color: '#222222',
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: 1.2,
            visibility: 'visible',
            display: 'block',
            opacity: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Most Recent Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] items-stretch overflow-hidden">
          {/* Left column: first card */}
          <div className="flex flex-col gap-6 h-full">
            {/* Image 1 – first hero card → Supplements page (rounded like reference) */}
            <Link
              to="/article/supplements-help-your-dog"
              className="hero-first-card relative overflow-hidden bg-[#4D6DD7] text-white shadow-elevated block transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4D6DD7] min-h-[220px] h-full rounded-xl"
              aria-label="How Can Supplements Help Your Dog?"
            >
              <img
                src="/article-supplements.png"
                alt="Light-colored dog with supplements"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-[#4D6DD7]/70" aria-hidden />
              <div className="relative z-10 px-6 md:px-8 py-6 md:py-8 max-w-xl">
                <h3 className="featured-card-heading">
                  How Can Supplements <br />
                  Help Your Dog?
                </h3>
                <p className="featured-card-text">
                  Many dogs don&apos;t seem to care much what they eat as long as they get plenty of it. If
                  your dog follows this trend, you might assume that it gets all the nutrition it
                  needs from regular store-bought &quot;chow.&quot;
                </p>
              </div>
            </Link>
          </div>

          {/* Right column: two smaller cards */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            <Link
              to="/article/healthy-eyes-clear-vision"
              className="grid grid-cols-[180px_1fr] gap-6 items-start transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2 rounded-xl flex-1"
              aria-label="Your Dog Needs Healthy Eyes and Clear Vision"
            >
              <div className="overflow-hidden flex-shrink-0 w-[180px] h-full rounded-lg">
                <img
                  src="/article-healthy-eyes.png"
                  alt="Close-up of a dog's eye"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col justify-start pt-0">
                <div className="popular-tag">
                  POPULAR
                </div>
                <h3 className="recent-card-title">
                  Your Dog Needs <br />
                  Healthy Eyes and <br />
                  Clear Vision
                </h3>
              </div>
            </Link>

            <Link
              to="/article/joint-health-mobility"
              className="grid grid-cols-[180px_1fr] gap-6 items-start transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6DD7] focus-visible:ring-offset-2 rounded-xl flex-1"
              aria-label="How to Improve Joint Health and Mobility in Dogs"
            >
              <div className="overflow-hidden flex-shrink-0 w-[180px] h-full rounded-lg">
                <img
                  src="/article-joint-health.png"
                  alt="Dog running on green grass"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col justify-start pt-0">
                <div className="popular-tag" style={{ visibility: 'hidden', height: '19px', marginBottom: '6px' }}>
                  POPULAR
                </div>
                <h3 className="recent-card-title">
                  How to Improve <br />
                  Joint Health &amp; <br />
                  Mobility in Dogs
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
