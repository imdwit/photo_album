import imgWrap from '../img-wrap';

export default React => ({ imgs = [] } = {}) =>  {
	const ImgWrap = imgWrap(React);

	return (
		<div className="page corners">
			{imgs.map(img =>
				<ImgWrap
					key={img.id}
					{...img}
				/>
			)}
		</div>
	);

}
