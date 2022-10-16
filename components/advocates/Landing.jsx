function Landing() {
  return (
    <section className="py-16 w-full h-screen">
      {/* <div className="absolute w-1/2 h-full right-0 top-0">
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-b from-white z-10"></div>
        <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white z-10"></div>
        <Img src="/assets/hero-background.jpg" position="bottom right" />
      </div>

      <div className="absolute w-1/3 h-full left-0 top-0">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img src="/assets/patternpad-hero.svg" className="opacity-50" />
      </div> */}

      <div className="container w-full h-full flex items-center z-10">
        <div className="space-y-6 max-w-3xl">
          <p className="tag">Discover peoples</p>
          <h2>
            The
            <span className="font-bold"> Platform </span> for all developers.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Landing;
