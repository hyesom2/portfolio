interface DivideTypes {
  margin: number;
  height: number;
  color: string;
}

function Divide({ height, margin, color }: DivideTypes) {
  return (
    <span style={{ display: `inline-block`, width: `1px`, height: `${height}px`, margin: `0 ${margin}px`, backgroundColor: `${color}` }}></span>
  )
}

export default Divide;