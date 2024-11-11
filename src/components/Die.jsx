import "../../styles/Die.css";

export default function Die({ value, isHeld, click, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59e391" : "#fff",
  };
  return (
    <div className="die-container" style={styles} onClick={() => click(id)}>
      <h2>{value}</h2>
    </div>
  );
}
