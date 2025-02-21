import "./App.scss";
import AnimalsList from "./widgets/AnimalList/AnimalsList";
import RobotSection from "./widgets/RobotSection/RobotSection";
import ZombiesBox from "./widgets/ZombiesBox/ZombiesBox";

function App() {
	return (
		<>
			<h1>🧑‍🤝‍🧑 people-holding-hands 🧑‍🤝‍🧑</h1>
			<p>a demo for students of React</p>
			<RobotSection />
			<ZombiesBox />
			<AnimalsList />
		</>
	);
}

export default App;
