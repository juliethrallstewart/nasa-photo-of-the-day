import React from 'react';
import './media.scss';

export default function Media ({ imgUrl, mediaType }) {
	if (mediaType === 'video') {
		return (
			<div className="iframeContainer" style={{ boxShadow: 5 }}>
				{/* <iframe src={imgUrl} title="video" width={'600'} height={'400'} /> */}
				<iframe src={imgUrl} title="video" style={{ maxWidth: 500 }} />
			</div>
		);
	}
	else {
		return (
			<div className="imageContainer">
				{/* <img src={imgUrl} alt="img of the day" width={'600'} height={'400'} /> */}
				<img src={imgUrl} alt="img of the day" style={{ maxWidth: 250 }} />
			</div>
		);
	}
}
