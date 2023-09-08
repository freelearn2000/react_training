const Child = React.memo((props) => {
  const { data } = props;
  console.log("child is rendering");
  return (
    <div className="ui very padded center aligned container segment">
      <h2>Child {data?.name}</h2>
    </div>
  );
});
const App = () => {
  const [data, setData] = React.useState({ name: "Mike", age: 50 });
  const updateParent = () => {
    setData({ name: "Katey", age: 99 });
  };
  function heavyComputation() {
    console.log("Heavy Calculation");
    return 123;
  }
  const memoizedData = React.useMemo(() => heavyComputation(), []);
  return (
    <div className="ui very padded center aligned container segment">
      <h1>Parent :{data.name} </h1>
      <button onClick={updateParent}>Change Parent data</button>
      <Child method={memoizedData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
