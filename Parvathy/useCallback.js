
// useCallback

// The useCallback hook is used when you have a component in which the child is rerendering again
//  and again without need.

// Pass an inline callback and an array of dependencies. 
// useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
// This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

const Child = React.memo((props) => {

  console.log(`Child is rendering!!`);

  return (
    <div className="ui very padded center aligned container segment">
      <h4>Child :</h4>
    </div>
  );
});

const App = () => {

  const [data, setData] = React.useState({ name: "Steve", age: 86 });

  const memoizedfn = React.useCallback(() => dosomething, []);

  function dosomething() {
    console.log("function called");
  }

  return (
    <div className="ui very padded center aligned container segment">
      <h3>From Parent:{data.name}</h3>
      <button onClick={() => setData({ name: "Mike", age: 5 })}>
        Change Parent Model
      </button>
      <Child method={memoizedfn} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);