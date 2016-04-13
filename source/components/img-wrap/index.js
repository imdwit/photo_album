export default React => ({imgSrc, imgCaption}) =>  (
	<div className="img-wrap">
		<img src={imgSrc} />
		<p className="img-caption">{imgCaption}</p>
	</div>
);
