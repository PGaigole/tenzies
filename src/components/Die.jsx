import "../../styles/Die.css";

export default function Die({ value, isHeld, click, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59e391" : "#fff",
  };
  const dots = Array.from({ length: value });
  return (
    <div
      className="die-container"
      style={styles}
      onClick={() => click(id)}
      data-value={value}
    >
      {dots.map((_, index) => (
        <span key={index} className="dot"></span>
      ))}
    </div>
  );
}
