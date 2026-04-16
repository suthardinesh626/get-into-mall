import CTAButton from '../components/CTAButton';
import './Retail.css';

/* ─────────────────────────────────────────────────
   RETAIL SECTION
   Horizontal scroll mechanism, marquee, leasing CTA
   ───────────────────────────────────────────────── */

const TENANTS = [
  'Apple', 'Nike', 'Lego', 'H&M', 'Zara', 'American Girl', 'Nordstrom', 'Macy\'s', 'Forever 21', 'Coach',
  // Duplicate for seamless loop
  'Apple', 'Nike', 'Lego', 'H&M', 'Zara', 'American Girl', 'Nordstrom', 'Macy\'s', 'Forever 21', 'Coach'
];

export default function Retail() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="retail" className="section retail">
      <div className="retail__header section-inner">
        <span className="gold-label reveal">The Retail Mix</span>
        <h2 className="display-3 reveal delay-100">
          Your Store, <span className="text-gold">Their Stage.</span>
        </h2>
      </div>

      {/* ── Marquee ── */}
      <div className="retail__marquee-container reveal delay-200">
        <div className="retail__marquee">
          {TENANTS.map((tenant, i) => (
            <span key={i} className="retail__marquee-item">{tenant}</span>
          ))}
        </div>
      </div>

      {/* ── Horizontal Scroll Container ── */}
      <div className="retail__scroll-container reveal delay-300">
        <div className="retail__scroll-track">
          
          {/* Card 1 */}
          <div className="retail__card glass-card">
            <h3 className="retail__card-title text-gold">520+ STORES</h3>
            <p className="retail__card-body">
              An unparalleled retail density spanning three floors, creating a true shopping destination rather than a quick stop.
            </p>
          </div>

          {/* Card 2 */}
          <div className="retail__card glass-card">
            <h3 className="retail__card-title text-gold">ANCHOR TENANTS</h3>
            <p className="retail__card-body">
              Anchored by industry leaders like Nordstrom and Macy's, driving consistent high-volume foot traffic to every wing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="retail__card glass-card">
            <h3 className="retail__card-title text-gold">POP-UP PROGRAM</h3>
            <p className="retail__card-body">
              Test markets and launch products with flexible 30-day to 6-month leases in high-traffic zones near theme park entrances.
            </p>
            <div className="retail__card-action">
               <span onClick={() => scrollTo('partners')} className="retail__card-link">Explore Pop-Ups →</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="retail__card glass-card">
            <h3 className="retail__card-title text-gold">FLAGSHIP OPPORTUNITY</h3>
            <p className="retail__card-body">
              Command maximum attention with expansion wings and premium entry-level leasing tailored for flagship statements.
            </p>
             <div className="retail__card-action">
               <span onClick={() => scrollTo('partners')} className="retail__card-link">Explore Flagships →</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Leasing CTA Card ── */}
      {/* <div className="section-inner reveal delay-400">
        <div className="retail__cta-card">
          <h3 className="retail__cta-headline">Ready to find your space?</h3>
          <p className="retail__cta-sub">
            Retail, flagship, pop-up, and F&B opportunities available.
          </p>
          <CTAButton 
            variant="primary" 
            onClick={() => scrollTo('partners')}
            className="retail__cta-btn"
          >
            REQUEST LEASING INFO
          </CTAButton>
        </div>
      </div> */}
    </section>
  );
}
