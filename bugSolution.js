```javascript
// components/MyComponent.js
function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('count updated:', count);
  }, [count]); // Correct dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```