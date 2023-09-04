/* 
REACT MEMO
React.memo is a higher-order component (HOC) provided by React that is used for optimizing the performance of functional components by preventing unnecessary renders. It's a way to memoize a component, meaning it will remember the result of rendering for a given set of props and only re-render when those props change. This can be particularly useful for optimizing functional components that receive the same props frequently but don't need to re-render unless those props change.
In summary, React.memo is a useful tool for optimizing the rendering performance of functional components by memoizing them based on their props. It's a simple way to avoid unnecessary re-renders and improve the efficiency of your React application.
*/

//Custom comparison function for reference type since React.memo is doing a shallow comparision
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
  const [counter, setCounter] = React.useState(0);
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
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
      <Child data={data} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
