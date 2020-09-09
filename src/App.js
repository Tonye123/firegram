import React, { useState } from "react";
import Title from "./comps/Title";
import { UploadForm } from "./comps/UploadForm";
import { ImageGrid } from "./comps/ImageGrid";
import { Modal } from "./comps/Modal";

function App() {
	const [seletedImage, setSelectedImage] = useState(null);
	return (
		<div className="App">
			<Title />
			<UploadForm />
			<ImageGrid setSelectedImage={setSelectedImage} />
			{seletedImage && (
				<Modal
					seletedImage={seletedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
}

export default App;
