export function Keyword({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "5px",
        margin: "5px",
        cursor: "pointer",
        textAlign: "center",
        borderRadius: "10px",
        border: "1px solid aqua",
        display: "inline-block",
      }}
    >
      {text}
    </div>
  );
}
