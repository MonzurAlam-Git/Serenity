import { useAppDispatch, useAppSelector } from "../Redux/Hooks/hooks";
import {
  customIncrement,
  decrement,
  increment,
} from "../Redux/features/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Counter</h1>
        <p className="text-3xl font-semibold mb-4 text-blue-600">{result}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(customIncrement(5))}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Custom Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
