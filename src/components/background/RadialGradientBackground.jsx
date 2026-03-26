import React from "react";

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(141,255,105,0.05)', stop: '0%' },
          { color: 'rgba(141,255,105,0.16)', stop: '35%' },
          { color: 'rgba(141,255,105,0.28)', stop: '65%' },
          { color: 'rgba(141,255,105,0.1)', stop: '100%' },
        ],
        blur: '160px',
        opacity: 0.7,
      },
      {
        position: 'top-1 left-1 ',
        size: 'w-[1400px] h-[1400px]',
        colors:[
          {color: 'rgba(141,255,105,0.04)', stop: '0%'},
          {color: 'rgba(141,255,105,0.12)', stop: '28%'},
          {color: 'rgba(141,255,105,0.22)', stop: '56%'},
          {color: 'rgba(141,255,105,0.08)', stop: '100%'},
        ],
        blur: '120px',
        opacity: 0.6,
      },
      {
        position: 'bottom-1 right-1 ',
        size: 'w-[1400px] h-[1400px]',
        colors:[
          {color: 'rgba(141,255,105,0.05)', stop: '0%'},
          {color: 'rgba(141,255,105,0.14)', stop: '30%'},
          {color: 'rgba(141,255,105,0.22)', stop: '62%'},
          {color: 'rgba(141,255,105,0.10)', stop: '100%'},
        ],
        blur: '160px',
        opacity: 0.6,
      },
      
    ],

    about: [
      {
        position: 'bottom -0 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors:[
          {color: 'rgba(141,255,105,0.25)', stop: '0%'},
          {color: 'rgba(141,255,105,0.45)', stop: '30%'},
          {color: 'rgba(141,255,105,0.5)', stop: '65%'},
          {color: 'rgba(141,255,105,0.35)', stop: '100%'},
        ],
        blur: '120px',
        opacity: 0.8,
      },
    ],
  };

  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants['hero'];
  const gradientElements = (colors) => {
    const stopColors = colors.map((c) => `${c.color} ${c.stop}`).join(', ');
    return `radial-gradient(circle at center, ${stopColors})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size}`}
          style={{
            background: gradientElements(gradient.colors),
            filter: gradient.blur ? `blur(${gradient.blur})` : undefined,
            opacity: gradient.opacity ?? 1,
          }}
        />

      ))}
    </div>

  )
}

export default RadialGradientBackground