'use client';

import { useEffect, useState } from 'react';

const ROLES   = ['Videographer', 'Video Editor', 'Graphic Designer'];
const SLIDE_MS = 520;   // swipe animation duration
const HOLD_MS  = 2700;  // how long each word stays
const ITEM_H   = 22;    // px — height of one slot item

export function RoleTicker() {
  const [idx, setIdx]       = useState(0);
  const [sliding, setSlide] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setSlide(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length);
        setSlide(false);
      }, SLIDE_MS);
    }, HOLD_MS);
    return () => clearTimeout(id);
  }, [idx]);

  const next    = (idx + 1) % ROLES.length;
  const dotIdx  = sliding ? next : idx;   // dots jump ahead during swipe

  return (
    <div className="flex flex-col items-center gap-3">

      {/* pill progress indicators */}
      <div className="flex items-center gap-1.5">
        {ROLES.map((_, i) => (
          <span
            key={i}
            className="inline-block rounded-full transition-all duration-500"
            style={{
              height: '4px',
              width: i === dotIdx ? '22px' : '4px',
              background: i === dotIdx ? 'var(--accent)' : 'var(--edge-hi)',
              opacity: i === dotIdx ? 1 : 0.45,
            }}
          />
        ))}
      </div>

      {/* swipe slot */}
      <div className="flex items-center gap-3">
        <span className="block h-px w-8 sm:w-14 bg-[var(--edge)]" />

        {/* clipping window — shows exactly one item */}
        <div style={{ height: ITEM_H, overflow: 'hidden', minWidth: '214px' }}>
          {/* sliding track — current on top, next below */}
          <div
            style={{
              transform: sliding ? `translateY(-${ITEM_H}px)` : 'translateY(0)',
              transition: sliding
                ? `transform ${SLIDE_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`
                : 'none',
            }}
          >
            {[idx, next].map((ri, i) => (
              <div
                key={i}
                style={{
                  height: ITEM_H,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="text-[12px] sm:text-[13px] font-bold uppercase text-[var(--accent)]"
                  style={{ letterSpacing: '0.28em' }}
                >
                  {ROLES[ri]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <span className="block h-px w-8 sm:w-14 bg-[var(--edge)]" />
      </div>

    </div>
  );
}
