import React from 'react';

function CardWithImage({
  maxW, name, size, variant, onChange,
}) {
  const cardClasses = `max-w-${maxW} bg-white rounded shadow-lg`;

  return (
    <div className={cardClasses}>
      <div className="p-4">
        <div className={`text-${size} font-${variant}`}>
          {name}
        </div>
        <div className="mt-2">
          <img src="image-url.jpg" alt="Card Image" className="w-full" />
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        Card Content
      </div>
      <div className="p-4 bg-gray-200">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onChange}>
          Button
        </button>
      </div>
    </div>
  );
}

function CardWithoutImage({
  maxW, name, size, variant, onChange,
}) {
  const cardClasses = `max-w-${maxW} bg-white rounded shadow-lg`;

  return (
    <div className={cardClasses}>
      <div className="p-4">
        <div className={`text-${size} font-${variant}`}>
          {name}
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        Card Content
      </div>
      <div className="p-4 bg-gray-200">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onChange}>
          Button
        </button>
      </div>
    </div>
  );
}

function Card({
  maxW, name, size, variant, onChange, hasImage,
}) {
  if (hasImage) {
    return <CardWithImage maxW={maxW} name={name} size={size} variant={variant} onChange={onChange} />;
  }

  return <CardWithoutImage maxW={maxW} name={name} size={size} variant={variant} onChange={onChange} />;
}

export default Card;
