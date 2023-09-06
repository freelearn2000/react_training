const MyAge = () => {
  console.log('my age');
  const [age, setAge] = React.useState(30);
  const incrementAge = () => {
    setAge(age + 5);
  };
  return (
    <>
      Age: {age}
      <button onClick={incrementAge}>Increment Age</button>
      <MySalary />
    </>
  );
};
const MySalary = React.memo(() => {
  console.log('my salary');
  const [salary, setSalary] = React.useState(30000);
  // Use useCallback to memoize the incrementSalary function
  const incrementSalary = React.useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <>
      Salary: {salary}
      <button onClick={incrementSalary}>Increment Salary</button>
    </>
  );
});
const MyApp = () => {
  console.log('my app');
  return (
    <>
      <h2>Welcome!</h2>
      <MyAge />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);
