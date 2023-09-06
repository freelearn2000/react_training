// Child1 uses react memo hence not rendered when props is unchanged
//where as Child2 keeps rendering every time the parent component is rendered even when there is no change in the props(value type)

const Child1 = React.memo((props) => {
  console.log("Child1 Rendering");
  const { certi } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h2>Child1 : {certi}</h2>
    </div>
  );
});

const Child2 = (props) => {
  console.log("Child2 Rendering");
  const { medal } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h3>Child2 : {medal}</h3>
    </div>
  );
};

function App() {
  const [certi, setCerti] = React.useState(0);
  const [medal, setMedal] = React.useState(0);
  const [achievement, setAchievement] = React.useState(0);
  console.log("parent is rendering");
  function incrementCerti() {
    setCerti(certi + 1);
  }
  function incrementMedal() {
    setMedal(medal + 2);
  }
  function incrementAch() {
    setAchievement(achievement + 1);
  }
  return (
    <div className="ui very padded center aligned container segment">
      <h1>Achievement : {achievement}</h1>
      <button onClick={incrementAch}>Increment Achievement</button>
      <Child1 certi={certi} />
      <button onClick={incrementCerti}>Increment the Certificates</button>
      <Child2 medal={medal} />
      <button onClick={incrementMedal}>Increment the Medals</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
