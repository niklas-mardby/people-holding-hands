import EditableText from "../../../components/EditableText/EditableText";
import { Robot } from "../RobotSection";
import "./RobotCard.scss";

type RobotProps = Robot & {
	updateState: (robot: Robot) => void;
};

export default function RobotCard({
	id,
	name,
	color,
	alignment,
	updateState,
}: Readonly<RobotProps>) {
	return (
		<div className="RobotCard">
			<EditableText
				title="Name"
				content={name}
				handleEdit={(newName) => {
					console.log("hit? newName:", newName);
					const robby: Robot = {
						id: id,
						name: newName,
						color: color,
						alignment: alignment,
					};
					console.log("robby the robot:", robby);
					updateState({
						id: id,
						name: newName,
						color: color,
						alignment: alignment,
					});
				}}
			/>
			<EditableText
				title="Color"
				content={color}
				handleEdit={(newColor) => {
					updateState({
						id: id,
						name: name,
						color: newColor,
						alignment: alignment,
					} as Robot);
				}}
			/>
			<EditableText
				title="Alignment"
				content={alignment}
				handleEdit={(newAligment) => {
					updateState({
						id: id,
						name: name,
						color: color,
						alignment: newAligment,
					} as Robot);
				}}
			/>
		</div>
	);
}
