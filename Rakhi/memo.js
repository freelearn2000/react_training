const arePropsEqual = (oldProps, newProps) => {
  console.log({ oldProps }, { newProps });
  let isEqual = true;
  Object.keys(newProps?.data).forEach((key) => {
    if (newProps?.data[key] !== oldProps?.data[key]) {
      isEqual = false;
    }
  });

  return isEqual;
};

const Child = React.memo(({ data }) => {
  console.log(`Child is renderindg data - ${data?.name}`);

  return (
    <div className="ui very padded center aligned container segment">
      <h2>Child: {data?.name}</h2>
    </div>
  );
}, arePropsEqual);

const Parent = () => {
  const [data, setData] = React.useState({ name: 'Diana', age: 8 });
  console.log(`Parent is rendering data - ${data?.name}`);

  return (
    <div className="ui very padded center aligned container segment">
      <h2>Parent : {data?.name}</h2>
      <button
        onClick={() => {
          setData({ name: 'Roma', age: 10 });
        }}
      >
        Change Data
      </button>
      <Child data={data} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);