import { Zombie } from "../ZombiesBox";
import "./ZombieCard.scss";

export default function ZombieCard({ name, speed }: Readonly<Zombie>) {
	return (
		<div className="ZombieCard">
			<p>Name: {name}</p>
			<p>Speed: {speed}</p>
		</div>
	);
}
