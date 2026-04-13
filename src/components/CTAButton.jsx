import './CTAButton.css';

/**
 * CTAButton
 * Primary call-to-action button supporting primary, outline, and ghost variants.
 */
export default function CTAButton({
  variant = 'primary',
  children,
  href,
  onClick,
  icon,
  className = '',
  id,
  ...rest
}) {
  const classes = `btn btn-${variant} cta-btn ${className}`.trim();

  const content = (
    <>
      <span className="cta-btn__text">{children}</span>
      {icon && <span className="cta-btn__icon">{icon}</span>}
      {variant === 'primary' && <span className="cta-btn__shine" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a id={id} href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
