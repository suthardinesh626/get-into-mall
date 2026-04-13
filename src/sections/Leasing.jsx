import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import './Leasing.css';

const CONTACTS = [
  {
    id: 'leasing',
    role: 'Retail Leasing',
    email: 'leasing@mallofamerica.com',
    phone: '+1 (952) 883-8800',
    desc: 'Flagship, inline, kiosk, and specialty leasing.',
    icon: '🏪',
  },
  {
    id: 'sponsorship',
    role: 'Sponsorships',
    email: 'sponsorships@mallofamerica.com',
    phone: '+1 (952) 883-8900',
    desc: 'Brand partnerships, digital media, and naming rights.',
    icon: '🤝',
  },
  {
    id: 'events',
    role: 'Events & Venues',
    email: 'events@mallofamerica.com',
    phone: '+1 (952) 883-8700',
    desc: 'Concerts, launches, conventions, and corporate events.',
    icon: '🎤',
  },
];

export default function Leasing() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    interest: 'leasing', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partners" className="section leasing">
      {/* Gold glow background */}
      <div className="leasing__bg" aria-hidden="true">
        <div className="leasing__bg-gradient" />
        <div className="leasing__bg-glow" />
      </div>

      <div className="leasing__inner section-inner">
        {/* Header */}
        <div className="leasing__header">
          <span className="gold-label reveal">Let's Build Together</span>
          <h2 className="display-2 reveal delay-100">
            Ready to{' '}
            <span className="text-gold">Partner?</span>
          </h2>
          <p className="body-lg reveal delay-200">
            Our team responds within 24 hours. Whether you're leasing a flagship,
            launching a sponsorship, or booking a 15,000-seat event — you're in the right place.
          </p>
        </div>

        <div className="leasing__layout">
          {/* Contact cards */}
          <div className="leasing__contacts reveal delay-300">
            {CONTACTS.map((c) => (
              <div
                key={c.id}
                id={`leasing-contact-${c.id}`}
                className="leasing__contact glass-card"
              >
                <div className="leasing__contact-icon" aria-hidden="true">{c.icon}</div>
                <div className="leasing__contact-info">
                  <div className="leasing__contact-role">{c.role}</div>
                  <div className="leasing__contact-desc">{c.desc}</div>
                  <div className="leasing__contact-links">
                    <a href={`mailto:${c.email}`} className="leasing__contact-link">
                      {c.email}
                    </a>
                    <a href={`tel:${c.phone}`} className="leasing__contact-link">
                      {c.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry form */}
          <div className="leasing__form-wrap reveal delay-200">
            {submitted ? (
              <div className="leasing__success glass-card">
                <div className="leasing__success-icon" aria-hidden="true">✦</div>
                <h3 className="leasing__success-headline">Message Received</h3>
                <p className="leasing__success-body">
                  Thank you, {form.name}. Our team will reach out to {form.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form
                id="leasing-inquiry-form"
                className="leasing__form glass-card"
                onSubmit={handleSubmit}
                aria-label="Partnership inquiry form"
              >
                <h3 className="leasing__form-headline">Send an Inquiry</h3>

                <div className="leasing__form-row">
                  <div className="leasing__field">
                    <label htmlFor="leasing-name" className="leasing__label">Full Name *</label>
                    <input
                      id="leasing-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="leasing__input"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="leasing__field">
                    <label htmlFor="leasing-company" className="leasing__label">Company *</label>
                    <input
                      id="leasing-company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="leasing__input"
                      placeholder="Brand Inc."
                    />
                  </div>
                </div>

                <div className="leasing__form-row">
                  <div className="leasing__field">
                    <label htmlFor="leasing-email" className="leasing__label">Email *</label>
                    <input
                      id="leasing-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="leasing__input"
                      placeholder="jane@brand.com"
                    />
                  </div>
                  <div className="leasing__field">
                    <label htmlFor="leasing-phone" className="leasing__label">Phone</label>
                    <input
                      id="leasing-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="leasing__input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="leasing__field">
                  <label htmlFor="leasing-interest" className="leasing__label">I'm interested in *</label>
                  <select
                    id="leasing-interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="leasing__input leasing__select"
                  >
                    <option value="leasing">Retail Leasing</option>
                    <option value="sponsorship">Sponsorship / Partnership</option>
                    <option value="events">Event / Venue Booking</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="leasing__field">
                  <label htmlFor="leasing-message" className="leasing__label">Message</label>
                  <textarea
                    id="leasing-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="leasing__input leasing__textarea"
                    placeholder="Tell us about your brand, goals, and timeline..."
                  />
                </div>

                <CTAButton
                  id="leasing-form-submit"
                  variant="primary"
                  type="submit"
                >
                  Send Inquiry
                </CTAButton>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="leasing__footer reveal">
          <div className="leasing__footer-brand">
            <span className="leasing__footer-name">Mall of America</span>
            <span className="leasing__footer-addr">60 E Broadway, Bloomington, MN 55425</span>
          </div>
          <div className="leasing__footer-links">
            <a href="https://mallofamerica.com" target="_blank" rel="noopener noreferrer" className="leasing__footer-link">
              mallofamerica.com
            </a>
            <span className="leasing__footer-sep" aria-hidden="true">·</span>
            <a href="tel:+19528838800" className="leasing__footer-link">+1 (952) 883-8800</a>
          </div>
          <p className="leasing__footer-copy">
            © {new Date().getFullYear()} Mall of America. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
