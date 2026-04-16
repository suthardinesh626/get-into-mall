import CTAButton from '../components/CTAButton';
import './Dining.css';

/* ─────────────────────────────────────────────────
   DINING SECTION
   Magazine-style editorial layout, F&B leasing
   ───────────────────────────────────────────────── */

const CATEGORIES = [
  'Fast Casual', 'Fine Dining', 'Celebrity Chef', 'Food Hall', 'Late Night', 'Family'
];

export default function Dining() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="dining" className="section dining">
      <div className="section-inner dining__layout">
        
        {/* ── Left: Large Hero Image ── */}
        <div className="dining__image-col reveal">
          <div className="dining__image-wrapper">
             <img 
               src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200" 
               alt="Fine dining experience placeholder" 
               className="dining__image"
               loading="lazy"
             />
             <div className="dining__image-overlay" aria-hidden="true" />
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="dining__content-col">
          <span className="gold-label reveal delay-100">The Culinary Destination</span>
          
          <h2 className="dining__headline reveal delay-200">
            Dining That Keeps <br/>
            <span className="text-gold">Them Here Longer.</span>
          </h2>

          <p className="body-lg reveal delay-300">
            With over 50 options ranging from celebrity chef concepts to the newly renovated North Garden food court, dining is a primary driver of visitation—not just an afterthought.
          </p>

          <div className="dining__stats-highlight glass-card reveal delay-400">
            <span className="dining__stat-percent">40%</span>
            <span className="dining__stat-desc">longer dwell time when visitors dine on-site.</span>
          </div>

          <div className="dining__categories reveal delay-500">
             {CATEGORIES.map(cat => (
               <span key={cat} className="dining__category-pill">{cat}</span>
             ))}
          </div>

          {/* <div className="dining__opportunity reveal delay-600">
            <div className="dining__opp-card">
              <h3 className="dining__opp-title">F&B Leasing Opportunities</h3>
              <p className="dining__opp-desc">Restaurant, café, and food hall concepts welcome.</p>
              <CTAButton 
                variant="primary" 
                onClick={() => scrollTo('partners')}
                className="dining__cta"
              >
                EXPLORE F&B SPACES
              </CTAButton>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
}
