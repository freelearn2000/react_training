//function used to check if the data has changed when ref type is used
const arePropsEqual = (oldProps, newProps) => {
  let isEqual = true;
  Object.keys(newProps.data).forEach((key) => {
    if (newProps.data[key] !== oldProps.data[key]) {
      isEqual = false;
    }
  });
  return isEqual;
};
//CHILD COMPONENT
const Child1 = React.memo((props) => {
  console.log(`Child 1 is rendering!!`);
  const { data } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h4>Child 1 :{data.name}</h4>
    </div>
  );
}, arePropsEqual);
//CHILD COMPONENT wITHOUT useCallback
const Child2 = () => {
  console.log(`Child 2 is rendering!!`);

  return (
    <div className="ui very padded center aligned container segment">
      <h4>Child 2 </h4>
    </div>
  );
};
//CHILD COMPONENT With useCallback
const Child3 = React.memo(() => {
  console.log(`Child 3 is rendering!!`);

  return (
    <div className="ui very padded center aligned container segment">
      <h4>Child 3 </h4>
    </div>
  );
});
//MAIN APP COMPONENT
const App = () => {
  const [data, setData] = React.useState({ name: "Steve", age: 86 });
  // function for Child Component2
  function doSomething1() {
    console.log("Function is called without useCallback");
  }
  // function with useCallBack for Child 3

  const memoizedFunction = React.useCallback(() => doSomething(), []);
  function doSomething() {
    console.log("Function called WITH UseCallback");
  }
  return (
    <div className="ui very padded center aligned container segment">
      <h3>From Parent:{data.name}</h3>
      <button onClick={() => setData({ name: "Stev", age: 8 })}>
        Change Parent Model
      </button>
      <Child1 data={data.name} />
      <Child2 method={doSomething1} />
      <Child3 method={memoizedFunction} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
