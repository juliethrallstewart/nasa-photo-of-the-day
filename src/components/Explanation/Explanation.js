import React from 'react';
import { Container } from 'semantic-ui-react';

const Explanation = ({ explanation }) => (
	<Container text>
		<p style={{ marginBottom: 50 }}>{explanation}</p>
	</Container>
);

export default Explanation;
