import Profile from "./Profile";
import AboutPage from "./AboutPage";
import ShoppingList from "./ShoppingList";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const isLoggedIn = true;

export default function App() {
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <AboutPage />
      <Profile />
      {isLoggedIn ? <h2>Admin Panel</h2> : <h2>Login Form</h2>}
      <ShoppingList />
    </>
  );
}
