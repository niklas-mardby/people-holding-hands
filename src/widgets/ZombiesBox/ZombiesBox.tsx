import { useState } from "react";
import ZombieCard from "./ZombieCard/ZombieCard";
import "./ZombiesBox.scss";
import Button from "../../components/Button/Button";

export type Zombie = {
	name: string;
	speed: string;
};

export default function () {
	const [zombies, setZombies] = useState<Zombie[]>([]);
	const [zombie, setZombie] = useState<Zombie>({ name: "", speed: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setZombie({ ...zombie, [e.target.name]: e.target.value });
	};

	return (
		<div className="ZombiesBox">
			<h2>🧟 Zombies </h2>
			<p>
				<label htmlFor="zombieName">Name: </label>
				<input
					type="text"
					id="zombieName"
					value={zombie.name}
					placeholder="Name"
					name="name"
					onChange={handleChange}
				/>
			</p>
			<p>
				<label htmlFor="zombieSpeed">Speed: </label>
				<input
					type="text"
					id="zombieSpeed"
					value={zombie.speed}
					placeholder="Speed"
					name="speed"
					onChange={handleChange}
				/>
			</p>
			<Button
				title="Add zombie"
				handleClick={() => {
					zombie.name && zombie.speed && setZombies([...zombies, zombie]);
					setZombie({ name: "", speed: "" });
				}}
			/>

			<div className="zombieContainer">
				{zombies.map((zombie, index) => (
					<ZombieCard key={`${index}-${zombie.name}`} {...zombie} />
				))}
			</div>
			<Button
				title="Seed"
				handleClick={() =>
					setZombies([
						{ name: "Bob", speed: "normal" },
						{ name: "Lindsy", speed: "crawl" },
						{ name: "Donny", speed: "slow" },
						{ name: "Lisa", speed: "mutant fast" },
						{ name: "Steve", speed: "fast" },
					])
				}
			/>
		</div>
	);
}
