import useCount, { CountState } from './store/useCount';
import Count1 from './Count1';
import Count2 from './Count2';

function App() {
  const count = useCount((state: CountState) => state.count);
  const setCount = useCount((state: CountState) => state.setCount);

  return (
    <div>
      <Count1 />
      <Count2 />
      <button onClick={() => setCount(count + 1)}>add Count</button>
    </div>
  );
}

export default App;
