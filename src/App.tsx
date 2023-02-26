import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import * as Realm from "realm-web";

function App() {
  const [count, setCount] = useState(0);

  const app = new Realm.App({ id: import.meta.env.VITE_DB_ID });
  const credentials = Realm.Credentials.emailPassword(
    import.meta.env.VITE_USER_EMAIL,
    import.meta.env.VITE_USER_PSWD
  );

  app.logIn(credentials).then((user) => {
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    console.log({ user, app });
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
