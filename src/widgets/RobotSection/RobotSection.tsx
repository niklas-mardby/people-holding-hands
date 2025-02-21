import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Button from "../../components/Button/Button";
import RobotCard from "./RobotCard/RobotCard";
import "./RobotSection.scss";

export type Robot = {
	id: string;
	name: string;
	color: string;
	alignment: string;
};

const setStartRobots = () => {
	return [
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
	];
};

export default function RobotSection() {
	const [robots, setRobots] = useState<Robot[]>(setStartRobots);

	const updateRobot = (id: string, key: keyof Robot, value: string) => {
		setRobots((prev) =>
			prev.map((robot) =>
				robot.id === id ? { ...robot, [key]: value } : robot
			)
		);
	};

	return (
		<div className="RobotSection">
			<h2>🤖 Robots</h2>
			<div className="robotContainer">
				{robots.map((robot) => (
					<RobotCard
						key={robot.id}
						robot={robot}
						updateRobot={updateRobot}
					/>
				))}
			</div>
			<Button
				title="Reset"
				handleClick={() => setRobots(setStartRobots())}
			/>
		</div>
	);
}
