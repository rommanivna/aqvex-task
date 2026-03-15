import { formatPrice } from "../../utils/formatPrice";

type Props = {
  price: number;
  oldPrice?: number;
};

export default function Price({ price, oldPrice }: Props) {
  return (
    <div className="flex items-center gap-2">
      {oldPrice && (
        <span className="text-gray-400 line-through text-sm">
          {formatPrice(oldPrice)}
        </span>
      )}

      <span className="text-blue-600 font-semibold text-lg">
        {formatPrice(price)}
      </span>

      {oldPrice && (
        <span className="bg-red-100 text-red-600 text-xs px-2 py-[2px] rounded">
          SALE
        </span>
      )}
    </div>
  );
}
