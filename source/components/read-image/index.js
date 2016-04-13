 let input;
export default React => ({onChange}) =>  (
	<div id="image-upload-wrap"
	onClick={() => {
		input.click();
	}}
	>
		<p>Upload</p>
		<input
		 	ref={node => {
          input = node
      }}
			id="image-upload"
			type="file"
			accept="image/*"
			multiple
			onChange={onChange} />
	</div>
);
