import React from 'react';
import { Header } from 'semantic-ui-react';
import Post from '../Post/Post.js';

const CreateHeader = ({ content, mediaType }) => (
	<div>
		<Header as="h1">
			{' '}
			<div>
				<h1 className="ui header" style={{ marginTop: 50, marginBottom: 50 }}>
					Nasa
					{
						mediaType === 'video' ? <span>Video </span> :
						<span> Image </span>}
					of the Day
				</h1>
				{
					content !== '' ? <Post promise={content} /> :
					<div>Loading...</div>}
			</div>
		</Header>
	</div>
);

export default CreateHeader;
