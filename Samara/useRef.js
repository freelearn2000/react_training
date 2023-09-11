const App = () => {

    const [data, setData] = React.useState(0);
    const dataRef = React.useRef(0);

    const handleClick = () => {
        setData(data+1);
        dataRef.current++;

        console.log('data:', data);
        console.log('dataRef:', dataRef.current);
    }

    return (
        <div className="ui very padded center aligned container segment">
            <h3>Data: {data}</h3>
            <button onClick={handleClick}>Change data</button>
        </div>
    );
}    

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);