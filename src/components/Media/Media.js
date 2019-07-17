import React, { useState, useEffect } from 'react';
import { url } from '../Data/Data.js';
import Data from '../Data/Data.js';
import axios from 'axios';

export default function Media ({ limit }) {
	const [
		url,
		setUrl
	] = useState();

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=nfIXoKXfXb5pGxmbanV70k4dOopcTy9kW8U05nH8')
			.then((res) => {
				const url = res.data.url;
				setUrl(url);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div>
			<iframe src={url} />
		</div>
	);
}
