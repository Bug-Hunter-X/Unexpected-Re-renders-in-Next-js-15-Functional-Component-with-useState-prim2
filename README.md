# Unexpected Re-renders in Next.js 15 Functional Component with useState

This repository demonstrates a bug in Next.js 15 where a functional component using the `useState` hook experiences unexpected re-renders, even when the state value remains unchanged.  This leads to unnecessary console logs and, in larger applications, could cause performance degradation.

## Bug Description

A simple counter component is built using `useState`. The component's `useEffect` hook logs the current count.  However, even with no changes to the state, the component re-renders, resulting in repeated log messages.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the console; you'll see the counter update message even without clicking the button.

## Solution

The solution involves optimizing the `useEffect` dependency array to only trigger when the state actually changes. By correctly specifying dependencies, the unnecessary re-renders are avoided.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests.