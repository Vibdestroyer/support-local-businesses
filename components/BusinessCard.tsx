type BusinessCardProps = {
  name: string;
  category: string;
  rating: number;
};

export default function BusinessCard({
  name,
  category,
  rating,
}: BusinessCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-xl font-medium">{name}</h2>
      <p className="text-sm text-zinc-500">{category}</p>
      <p className="text-sm">Rating: {rating} ⭐</p>
    </div>
  );
}
