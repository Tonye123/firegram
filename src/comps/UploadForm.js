import React, { useState } from "react";

const types = ["image/png", "image/jpeg"];
export const UploadForm = () => {
	const [file, setFile] = useState(null);

	const handleChange = (e) => {
		let selectedItem = e.target.files[0];
		if (selectedItem && types.includes(selectedItem)) {
			setFile(selectedItem);
		}
	};

	return (
		<form>
			<input type="file" onChange={handleChange} />
		</form>
	);
};
