import Profile from "./Profile";
import AboutPage from "./AboutPage";
import ShoppingList from "./ShoppingList";

import { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

const isLoggedIn = true;

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton count={count} onClick={handleClick} />
      </div>
      <AboutPage />
      <Profile />
      {isLoggedIn ? <h2>Admin Panel</h2> : <h2>Login Form</h2>}
      <ShoppingList />
      <div>
        <h1>Counters that update separately</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </>
  );
}
