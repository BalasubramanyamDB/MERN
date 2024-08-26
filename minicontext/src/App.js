import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login"
function App() {
  return (

    <UserContextProvider>
      <h1>Welcome to context api</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
    
  );
}

export default App;
