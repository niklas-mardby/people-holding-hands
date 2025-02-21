import EditableText from "../../../components/EditableText/EditableText";
import { Robot } from "../RobotSection";
import "./RobotCard.scss";

type RobotProps = {
	robot: Robot;
	updateRobot: (id: string, key: keyof Robot, value: string) => void;
};

export default function RobotCard({
	robot,
	updateRobot,
}: Readonly<RobotProps>) {
	return (
		<div className="RobotCard">
			<EditableText
				title="Name"
				content={robot.name}
				onSave={(value) => updateRobot(robot.id, "name", value)}
			/>
			<EditableText
				title="Color"
				content={robot.color}
				onSave={(value) => updateRobot(robot.id, "color", value)}
			/>
			<EditableText
				title="Alignment"
				content={robot.alignment}
				onSave={(value) => updateRobot(robot.id, "alignment", value)}
			/>
		</div>
	);
}
