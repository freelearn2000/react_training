/*
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
*/
const App = () => {
  const [data, setData] = React.useState(0);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    console.log("after mounting");
    elementRef.current?.focus();

    //clean up function
    return () => {
      console.log("cleaning up");
    };
  }, [data]);
  console.log("app rendering");

  return (
    <div className="ui very padded center aligned container segment">
      <h1>DATA : {data}</h1>
      <div className="ui button">
        <input type="text" placeholder="Search" ref={elementRef} />
      </div>

      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
