import useCount, { CountState } from './store/useCount';

const Count2 = () => {
  const count = useCount((state: CountState) => state.count);

  return <p>组件2显示count：{count}</p>;
};

export default Count2;
