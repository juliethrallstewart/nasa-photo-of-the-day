import React from 'react';
import './PhotoCard.scss';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { StyledH2 } from '../../Styles.js';
import Media from '../Media/Media.js';
import CreatHeader from '../Header/Header.js';
import CreateHeader from '../Header/Header.js';

const StyledCard = styled(Card)`
width: 300px;
max-width: 100%;
background-color: lightblue !important;
img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 0;
    padding-bottom: 0;
}
h2 {
    margin-top: 0;
    padding-top: 25px;
    background: linear-gradient(#f8f8f8, #ffffff);
}
.content {
    font-size: 0.8rem;
    line-height: 1.5;
}
`;

export default function PhotoCard (props) {
	console.log(props);
	return (
		<Card className="photo-card">
			<div className="content-wrapper">
				<CreateHeader content={props.content} mediaType={props.mediaType} />
				<Media imgUrl={props.imgUrl} mediaType={props.mediaType} />
				<StyledH2 color="blue">{props.title}</StyledH2>
				<Card.Content>
					<div className="date">{props.date}</div>
					<Card.Description className="content">{props.explanation}</Card.Description>
				</Card.Content>
			</div>
		</Card>
	);
}
