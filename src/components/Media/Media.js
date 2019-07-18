import React from 'react';

export default function Media ({ imgUrl, mediaType, limit }) {
	if (mediaType === 'video') {
		return (
			<div className="iframeContainer">
				<iframe src={imgUrl} title="video" width={'600'} height={'400'} />
			</div>
		);
	}
	else {
		return (
			<div className="imageContainer">
				<img src={imgUrl} alt="img" width={'600'} height={'400'} />
			</div>
		);
	}
}

// export default function Media ({ imgUrl, mediaType, limit }) {
// 	return (
// 		<div className="iframeContainer">
// 			<iframe src={imgUrl} title="video" width={'600'} height={'400'} />
// 		</div>
// 	);
// }
