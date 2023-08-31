
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
  
  const App = () => {

    const [data, setData] = React.useState({ name: "Steve", age: 86 });
  
    return (
      <div className="ui very padded center aligned container segment">
        <h3>From Parent:{data.name}</h3>
        <button onClick={() => setData({ name: "Mike", age: 5 })}>
          Change Parent Model
        </button>
        <Child data={data} />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);