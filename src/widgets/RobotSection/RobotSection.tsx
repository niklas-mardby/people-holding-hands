import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import RobotCard from "./RobotCard/RobotCard";
import "./RobotSection.scss";
import Button from "../../components/Button/Button";

export type Robot = {
	id: string;
	name: string;
	color: string;
	alignment: string;
};

export default function RobotSection() {
	const [robots, setRobots] = useState<Robot[]>([]);

	const editRobot = (robot: Robot) => {
		setRobots(robots.map((r) => (r.id !== robot.id ? r : robot)));
	};

	return (
		<div className="RobotSection">
			<h2>🤖 Robots</h2>
			<div className="robotContainer">
				{robots.map((robot, index) => (
					<RobotCard
						key={`${index}-${robot.name}`}
						{...robot}
						updateState={editRobot}
					/>
				))}
			</div>
			<Button
				title="Reset"
				handleClick={() =>
					setRobots([
						{
							id: uuidv4(),
							name: "Bob",
							color: "grey",
							alignment: "evil",
						},
						{
							id: uuidv4(),
							name: "Linda",
							color: "red",
							alignment: "good",
						},
						{
							id: uuidv4(),
							name: "Steve",
							color: "red",
							alignment: "neutral",
						},
						{
							id: uuidv4(),
							name: "George",
							color: "purple",
							alignment: "good",
						},
						{
							id: uuidv4(),
							name: "Karen",
							color: "red",
							alignment: "evil",
						},
						{
							id: uuidv4(),
							name: "Julia",
							color: "pink",
							alignment: "awesome",
						},
					])
				}
			/>
		</div>
	);
}
