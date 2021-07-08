import React from "react";

import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Login from "./Login.js";
import Chat from "./Chat";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
function App() {
    const [{ user}, dispatch] = useStateValue();
    return (
        <div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<div className="app__main">
										<h1>I love you, Anastasia!</h1>
										<img src="/heart.svg" alt="heart" />
									</div>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
    );
}

export default App;
