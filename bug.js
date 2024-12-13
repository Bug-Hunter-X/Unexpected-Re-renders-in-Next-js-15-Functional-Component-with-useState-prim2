```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('count updated:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```