import "./AnimalsList.scss";
import Button from "../../components/Button/Button";

export default function AnimalsList() {
	return (
		<div className="AnimalsList">
			<h2>Animals</h2>
			<ul>
				<li key="1">
					Lion <Button title="Delete" handleClick={() => {}} />
				</li>
			</ul>
		</div>
	);
}
