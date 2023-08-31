const arePropsEqual = (oldProps, newProps) => {
  let isEqual = true;
  Object.keys(newProps.data).forEach((key) => {
    if (newProps.data[key] !== oldProps.data[key]) {
      isEqual = false;
    }
  });
  return isEqual;
};
const Child = React.memo((props) => {
  console.log(`Child is rendering!!`);
  const { data } = props;
  return (
    <div className="ui very padded center aligned container segment">
      <h4>Child :{data.name}</h4>
    </div>
  );
}, arePropsEqual);

// But when we pass data as reference type even when the value remains the same it keeps re rendering
//react is checking the address of the object which keeps changing (while using useState) it keeps on rendering even when the value (key value) of the object is the same
//this could be solved by adding a second argument to react.memo,it keeps checking if there is a change in value and will render only if the value inside the object is changed
// In that case, you can provide a custom comparison function, which React will use to compare the old and new props instead of using shallow equality. This function is passed as a second argument to memo. It should return true only if the new props would result in the same output as the old props; otherwise it should return false.
const App = () => {
  const [data, setData] = React.useState({ name: "Steve", age: 86 });

  return (
    <div className="ui very padded center aligned container segment">
      <h3>From Parent:{data.name}</h3>
      <button onClick={() => setData({ name: "Stev", age: 8 })}>
        Change Parent Model
      </button>
      <Child data={data} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
