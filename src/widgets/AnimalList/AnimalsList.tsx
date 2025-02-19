import "./AnimalsList.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import AnimalItem from "./AnimalItem/AnimalItem";

export default function AnimalsList() {
	const [animals, setAnimals] = useState<string[]>([
		"Lion",
		"Hamster",
		"Goat",
	]);

	const deleteAnimal = (index: number) => {
		setAnimals(animals.filter((_, i) => i !== index));
	};

	return (
		<div className="AnimalsList">
			<h2>🐹 Animals</h2>
			<ul>
				{animals.map((animal, index) => (
					<AnimalItem
						key={`${index}-${animal}`}
						index={index}
						animal={animal}
						deleteAnimal={deleteAnimal}
					/>
				))}
			</ul>
			<Button
				title="Reset"
				handleClick={() =>
					setAnimals([
						"Lion",
						"Hamster",
						"Goat",
						"Chicken",
						"Tiger",
						"Elephant",
						"Horse",
					])
				}
			/>
		</div>
	);
}
