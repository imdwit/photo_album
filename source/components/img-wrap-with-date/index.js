export default React => ({imgSrc, imgCaption, dismiss}) =>  (
	<div className="img-wrap">
		<img src={imgSrc} />
		<p>Please add the date this image was captured</p>
		<p>Or just <a className="dismiss" href="#" onClick={dismiss}>click here</a> to add to the end</p>
		<input type="date" />

		<p className="img-caption">{imgCaption}</p>
	</div>
);
