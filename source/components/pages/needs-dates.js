
import imgWrapWithDate from '../img-wrap-with-date';
export default React => ({ imgs = [], dismiss } = {}) =>  {
	const ImgWrap = imgWrapWithDate(React);

	return (
		<div className="page needs-dates">
			{imgs.map(img =>
				<ImgWrap
					dismiss={dismiss}
					key={img.id}
					{...img}
				/>
			)}
		</div>
	);

}
