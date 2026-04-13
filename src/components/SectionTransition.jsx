import './SectionTransition.css';

/**
 * SectionTransition
 * A decorative connector element between sections.
 * Supports fade, gradient-wipe, and gold-line styles.
 */
export default function SectionTransition({ type = 'fade', fromColor, toColor }) {
  if (type === 'gold-line') {
    return (
      <div className="st-gold-line" aria-hidden="true">
        <div className="st-gold-line__bar" />
      </div>
    );
  }

  if (type === 'gradient') {
    return (
      <div
        className="st-gradient"
        aria-hidden="true"
        style={{
          background: `linear-gradient(to bottom, ${fromColor || 'var(--color-surface)'}, ${toColor || 'var(--color-surface-2)'})`,
        }}
      />
    );
  }

  return (
    <div
      className="st-fade"
      aria-hidden="true"
      style={{
        background: `linear-gradient(to bottom, ${fromColor || 'transparent'}, ${toColor || 'var(--color-surface)'})`,
      }}
    />
  );
}
