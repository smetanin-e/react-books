import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlise';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className='btn btn_black btn_p'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className='btn btn_black btn_p'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Counter;
