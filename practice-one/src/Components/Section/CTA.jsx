import React from 'react';
import Button from '../Common/Button';

const CtaSection = () => (
  <section className="cta container mx-auto mt-36">
    <div className="cta-content relative card bg-[url(./assets/BG.png)] bg-cover h-[398px] bg-no-repeat w-full lg:py-20 lg:px-20 pb-0 flex flex-col lg:flex-row items-center">
      <div className="card-body absolute md:relative bg-secondary lg:bg-inherit lg:w-[140%] w-full p-10 lg:p-0 mx-8">
        <div className="card-text tracking-wider md:w-[85%] lg:mb-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            <a href="/" className="text-white">
              Ready to supercharge your business?
            </a>
          </h2>
          <p className="text-gray-400 text-sm md:text-md">
            Ask about Yoora products, pricing, implementation, or anything else.
            Our highly trained reps are standing by, ready to help.
          </p>
        </div>
      </div>
      <div className="card-footer absolute md:relative bg-[url(./assets/BG.png)] -bottom-[55%] md:-bottom-0 lg:bg-none bg-[100%] bg-fill flex flex-col items-center w-full p-20 lg:p-0 justify-center">
        <Button
          text="Try for Free"
          variant="outline"
          size="large"
          rightIcon
          alt="This is the chevron-right icon of the button"
          type="button"
        />
        <span className="text-sm text-white hover:underline">
          Full access. No credit card required.
        </span>
      </div>
    </div>
  </section>
);

export default CtaSection;
