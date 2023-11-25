export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;

  const packedPercentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go"
          : `💼 you have ${numItems} items on your list, and you already packed
              ${numPackedItems} (${packedPercentage}X%)`}
      </em>
    </footer>
  );
}
