import { useState } from "react";
import "./EditableText.scss";
import Button from "../Button/Button";

type EditableTextProps = {
	title: string;
	content: string;
	onSave: (value: string) => void;
};
export default function EditableText({
	title,
	content,
	onSave,
}: Readonly<EditableTextProps>) {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(content);

	const handleSave = () => {
		onSave(value);
		setIsEditing(false);
	};

	return (
		<p className="EditableText">
			{title}:{" "}
			{isEditing ? (
				<input
					type="text"
					placeholder={title}
					value={value}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setValue(e.target.value)
					}
				/>
			) : (
				<>{value}</>
			)}
			<Button
				title={isEditing ? "Save" : "Edit"}
				handleClick={() => (isEditing ? handleSave() : setIsEditing(true))}
			/>
		</p>
	);
}
