import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Media from '../Media/Media.js';

export default function Data ({ limit }) {
	const [
		date,
		setDate
	] = useState();
	const [
		explanation,
		setExplanation
	] = useState();
	const [
		mediaType,
		setMediaType
	] = useState();
	const [
		title,
		setTitle
	] = useState();
	const [
		url,
		setUrl
	] = useState();

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=nfIXoKXfXb5pGxmbanV70k4dOopcTy9kW8U05nH8')
			.then((res) => {
				const result = res.data;
				setDate(result.date);
				setExplanation(result.explanation);
				setMediaType(result.media_type);
				setTitle(result.title);
				setUrl(result.url);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	console.log(url);

	return (
		<div className="container">
			<h1>Nasa Photo of the Day</h1>
			{/* <Media url={url} /> */}
			<Media />
			<h2>{title}</h2>
			<p>{date}</p>
			<p>{explanation}</p>
		</div>
	);
}
