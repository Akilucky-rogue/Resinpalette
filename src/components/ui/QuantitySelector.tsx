import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  return (
    <div className="flex items-center border border-neutral-300 rounded-md">
      <button
        type="button"
        className="p-2 text-neutral-500 hover:text-neutral-700 focus:outline-none disabled:opacity-50"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <span className="px-4 py-2 text-center min-w-[3rem]">
        {quantity}
      </span>
      
      <button
        type="button"
        className="p-2 text-neutral-500 hover:text-neutral-700 focus:outline-none disabled:opacity-50"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;