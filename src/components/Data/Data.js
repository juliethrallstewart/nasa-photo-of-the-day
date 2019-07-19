import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Media from '../Media/Media.js';
import Post from '../Post/Post.js';
import 'semantic-ui-css/semantic.min.css';
import CreateHeader from '../Header/Header.js';
import Explanation from '../Explanation/Explanation.js';
import './data.scss';
import { StyledH2 } from '../../Styles.js';
import PhotoCard from '../PhotoCard/PhotoCard.js';

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

	useEffect(
		() => {
			axios
				.get(API)
				.then((res) => {
					const result = res.data;
					setContent(result);
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
			{/* <CreateHeader content={content} mediaType={content.media_type} />
			<Media imgUrl={content.url} mediaType={content.media_type} />
			<StyledH2 className="title" color="blue">
				{content.title}
			</StyledH2>
			<p className="date">{content.date}</p>
            <Explanation explanation={content.explanation} /> */}
			<PhotoCard
				imgUrl={content.url}
				mediaType={content.media_type}
				explanation={content.explanation}
				content={content}
				title={content.title}
				date={content.date}
			/>
		</div>
	);
}

// old styling for reference

// setDate(result.date);
// setExplanation(result.explanation);
// setMediaType(result.media_type);
// setTitle(result.title);
// setUrl(result.url);

// const [
// 	date,
// 	setDate
// ] = useState();
// const [
// 	explanation,
// 	setExplanation
// ] = use
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

{
	/* <ContainerBox
imgUrl={content.url}
mediaType={content.media_type}
explanation={content.explanation}
content={content}
title={content.title}
date={content.date}
/> */
}

{
	/* {content.map((data) => (
				<ContainerBox
					imgUrl={data.url}
					mediaType={data.media_type}
					explanation={data.explanation}
					content={data.content}
					title={data.title}
					date={data.date}
				/>
			))} */
}
