import { useState } from "react";
import "./EditableText.scss";
import Button from "../Button/Button";

type EditableTextProps = {
	title: string;
	content: string;
	handleEdit: (newContent: string) => void;
};
export default function EditableText({
	title,
	content,
	handleEdit,
}: Readonly<EditableTextProps>) {
	const [editableText, setEditableText] = useState(content);
	const [isEditing, setIsEditing] = useState(false);

	const handleClick = () => {
		if (isEditing) handleEdit(editableText);
		setIsEditing(!isEditing);
	};

	return (
		<p className="EditableText">
			{isEditing ? (
				<>
					{title}:{" "}
					<input
						type="text"
						placeholder={title}
						value={editableText}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setEditableText(e.target.value)
						}
					/>{" "}
					<Button title="Save" handleClick={handleClick} />
				</>
			) : (
				<>
					{title}: {editableText}{" "}
					<Button title="Edit" handleClick={handleClick} />
				</>
			)}
		</p>
	);
}
