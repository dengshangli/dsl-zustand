import useCount, {CountState} from './store/useCount';

const Count1 = () => {
  const count = useCount((state: CountState) => state.count);

  return <p>组件1显示count：{count}</p>;
};

export default Count1;
