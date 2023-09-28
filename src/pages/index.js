import Board from "@/components/Board";
import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";

export default function Home() {
  return (
    <>
      <span
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        <span style={{ color: "red" }}>D</span>
        <span style={{color:"blue"}}>r</span>
        <span style={{color:"indigo"}}>a</span>
        <span style={{color:"violet"}}>w</span>
        <span style={{color:"blue"}}>i</span>
        <span style={{color:"orange"}}>n</span>
        <span style={{color:"yellow"}}>g</span>-<span style={{color:"red"}}>B</span>
        <span style={{color:"blue"}}>o</span>
        <span style={{color:"green"}}>a</span>
        <span style={{color:"orange"}}>r</span>
        <span style={{color:"violet"}}>d</span>
      </span>
      <Menu />
      <Toolbox />
      <Board />
    </>
  );
}
