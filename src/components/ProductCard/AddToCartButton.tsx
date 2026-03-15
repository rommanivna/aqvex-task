type Props = {
  disabled?: boolean;
};

export default function AddToCartButton({ disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className="
      flex-1
      bg-blue-100
      text-blue-700
      text-sm
      font-medium
      rounded-lg
      px-3
      py-1
      hover:bg-blue-200
      transition
      disabled:opacity-50
      "
    >
      В корзину
    </button>
  );
}
