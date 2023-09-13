// useRef is a React Hook that lets you reference a value that’s not needed for rendering
// if a changing data is kept in useRef the browser wont re render when this data changes

const App = () => {
  const [data, setData] = React.useState(0);
  const dataRef = React.useRef(0);

  const clickHandler = () => {
    setData(data + 1);

    dataRef.current++;
    console.log(`data : `, data);
    console.log(`ref`, dataRef.current);
  };

  return (
    <div className="ui very padded center aligned container segment">
      <h1>DATA : {data}</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
