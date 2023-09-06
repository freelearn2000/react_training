// CHILD COMPONENT WITH REACT.memo
const Child1 = React.memo((props) => {
  console.log("Child1 Rendering");
  const { certi } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h2>
        Winner : {certi.student}, Certificate : {certi.name}
      </h2>
    </div>
  );
});
//CHILD COMPONENT with out React.memo
const Child2 = (props) => {
  console.log("Child2 Rendering");
  const { medal } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h3>
        Medal Winner : {medal.student}, Medal : {medal.name}
      </h3>
    </div>
  );
};
//MAIN APP COMPONENT
function App() {
  //data for child 1
  const [certi, setCerti] = React.useState({ name: "React", student: "Dave" });
  //data for child 2
  const [medal, setMedal] = React.useState({ name: "Gold", student: "Steve" });
  //data for parent component
  const [achievement, setAchievement] = React.useState({
    Achievement: "Great",
    student: "xyx",
  });
  console.log("parent is rendering");
  //onClick function for Child 1
  function certiWinner() {
    setCerti({ name: "Node", student: "Mark" });
  }
  //onClick function for Child 2
  function medalWinner() {
    setMedal({ name: "Gold", student: "Steve" });
  }

  return (
    <div className="ui very padded center aligned container segment">
      <h1>Achievement : {achievement.Achievement}</h1>
      <button
        onClick={() => setAchievement({ Achievement: "GOOD", student: "XYZ" })}
      >
        Increment Achievement
      </button>
      <Child1 certi={certi} />
      <button onClick={certiWinner}>Certificate Winner</button>
      <Child2 medal={medal} />
      <button onClick={medalWinner}>Medal Winner</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
