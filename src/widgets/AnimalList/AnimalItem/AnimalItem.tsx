import "./AnimalItem.scss";
import Button from "../../../components/Button/Button";

type AnimalItemProps = {
	index: number;
	animal: string;
	deleteAnimal: (index: number) => void;
};
export default function AnimalItem({
	index,
	animal,
	deleteAnimal,
}: Readonly<AnimalItemProps>) {
	return (
		<li className="AnimalItem">
			<span>{animal} </span>
			<Button
				title="Delete"
				handleClick={() => {
					deleteAnimal(index);
				}}
			/>
		</li>
	);
}
