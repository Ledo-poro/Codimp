import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBg" aria-hidden="true">
        <span className="heroBlob hb1" />
        <span className="heroBlob hb2" />
        <span className="heroBlob hb3" />
        <span className="heroGrid" />
      </div>

      <div className="container heroInner">
        <div className="heroCopy">
          <p className="eyebrow reveal">Modern web design + animations</p>
          <h1 className="heroTitle reveal">
            Building <span className="gradText">Modern Websites</span> That Grow Your Business
          </h1>
          <p className="heroSub reveal">
            We design and develop fast, responsive, user-focused websites that help brands look premium —
            and convert.
          </p>

          <div className="heroActions reveal">
            <a className="btn btnPrimary" href="/work">
              See work
            </a>
            <a className="btn btnGhost" href="/contact">
              Contact us
            </a>
          </div>

          <div className="heroStats reveal">
            {[
              { k: 'Fast', v: 'Performance-first' },
              { k: 'Modern', v: 'Motion + polish' },
              { k: 'Clean', v: 'Design system UI' },
            ].map((s) => (
              <div key={s.k} className="stat">
                <div className="statK">{s.k}</div>
                <div className="statV">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="heroMedia reveal">
          <div className="mediaFrame">
            <div className="mediaTop">
              <span className="dot dotRed" />
              <span className="dot dotYellow" />
              <span className="dot dotGreen" />
              <span className="mediaLabel">Hero preview</span>
            </div>
            <img className="heroImg" src='src\assets\Codimp logo.png' alt="Website preview" />
            <div className="mediaSheen" aria-hidden="true" />
          </div>
          <div className="floatCard" aria-hidden="true">
            <div className="floatBar" />
            <div className="floatText">Scroll to reveal</div>
          </div>
        </div>
      </div>
    </section>
  )
}

