type Props = {
  rating: number;
  reviews: number;
};

export default function Rating({ rating, reviews }: Props) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="flex items-center gap-1 text-sm">
      {stars.map((filled, i) => (
        <span key={i} className={filled ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}

      <span className="text-gray-400 ml-1">({reviews})</span>
    </div>
  );
}
