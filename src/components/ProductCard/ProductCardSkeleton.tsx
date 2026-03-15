export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-4" />

      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />

      <div className="h-4 bg-gray-200 rounded w-full mb-2" />

      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />

      <div className="flex gap-2">
        <div className="h-8 bg-gray-200 rounded w-20" />
        <div className="h-8 bg-gray-200 rounded flex-1" />
      </div>
    </div>
  );
}
