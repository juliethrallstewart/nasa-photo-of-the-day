import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Media from '../Media/Media.js';
import Post from '../Post/Post.js';

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=nfIXoKXfXb5pGxmbanV70k4dOopcTy9kW8U05nH8';

export default function Data ({ limit }) {
	const [
		API,
		setAPI
	] = useState(nasaAPI);

	const [
		content,
		setContent
	] = useState('');

	// const [
	// 	date,
	// 	setDate
	// ] = useState();
	// const [
	// 	explanation,
	// 	setExplanation
	// ] = useState();
	// const [
	// 	mediaType,
	// 	setMediaType
	// ] = useState();
	// const [
	// 	title,
	// 	setTitle
	// ] = useState();
	// const =
	// 	url,
	// 	setUrl
	// ] = useState();

	useEffect(
		() => {
			axios
				.get(API)
				.then((res) => {
					const result = res.data;
					setContent(result);
					// setDate(result.date);
					// setExplanation(result.explanation);
					// setMediaType(result.media_type);
					// setTitle(result.title);
					// setUrl(result.url);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		[
			API
		]
	);

	console.log(content);

	return (
		<div className="container">
			<header>
				<h1>
					Nasa
					{
						content.media_type === 'video' ? <span>Video </span> :
						<span> Image </span>}
					of the Day
				</h1>
				{
					content !== '' ? <Post promise={content} /> :
					<div>Loading...</div>}
			</header>
			<Media imgUrl={content.url} mediaType={content.media_type} />
			<h2 className="title">{content.title}</h2>
			<p className="date">{content.date}</p>
			<p className="explanation">{content.explanation}</p>
		</div>
	);
}
