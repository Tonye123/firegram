import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const types = ["image/png", "image/jpeg"];
export const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		let selectedItem = e.target.files[0];
		if (selectedItem && types.includes(selectedItem.type)) {
			setError("");
			setFile(selectedItem);
		} else {
			setFile(null);
			setError("Please select an image file(png or jpeg)");
		}
	};

	return (
		<form>
			<label>
				<input type="file" onChange={handleChange} />
				<span>+</span>
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};
