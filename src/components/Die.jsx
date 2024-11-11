import "../../styles/Die.css";

export default function Die({ value }) {
  return (
    <div className="die-container">
      <h2>{value}</h2>
    </div>
  );
}
