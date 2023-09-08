


  const Child = React.memo(( ) => {

    console.log(`Child is rendering!!`);
   
    return (
      <div className="ui very padded center aligned container segment">
        <h4>Child</h4>
      </div>
    );
  });
  
  const App = () => {

    const [data, setData] = React.useState({ name: "Steve", age: 86 });

    console.log('parent is rendering...');

    function heavyComputation() {
        console.log('do heavy calculation ---');
        return 3232;
    }

    const memoizedData = React.useMemo( () => heavyComputation() ,[]);
  
    return (
      <div className="ui very padded center aligned container segment">
        <h3>From Parent:{data.name}</h3>
        <button onClick={() => setData({ name: "Mike", age: 5 })}>
          Change Parent Model
        </button>
        <Child method={memoizedData} />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);