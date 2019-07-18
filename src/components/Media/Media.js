import React, { useState, useEffect } from 'react';
import { url } from '../Data/Data.js';
import Data from '../Data/Data.js';

export default function Media ({ imgUrl, limit }) {
	return (
		<div>
			<iframe src={imgUrl} title="video" />
		</div>
	);
}
