import "./App.scss";
import AnimalsList from "./widgets/AnimalList/AnimalsList";
import ZombiesBox from "./widgets/ZombiesBox/ZombiesBox";

function App() {
	return (
		<>
			<h1>🧑‍🤝‍🧑 people-holding-hands 🧑‍🤝‍🧑</h1>
			<p>a demo for students of React</p>
			<AnimalsList />
			<ZombiesBox />
		</>
	);
}

export default App;
