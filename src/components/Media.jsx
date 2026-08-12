import { useState } from "react";

/**
 * Wraps <img> with a soft gradient fallback so a failed remote image
 * never shows a broken-image icon on the live site.
 */
export default function Media({ src, alt = "", className = "", ...rest }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`bg-gradient-to-br from-mist via-gold-light/40 to-teal-light ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
      {...rest}
    />
  );
}
