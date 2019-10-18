import React from 'react';
import { Card } from 'semantic-ui-react';

export default function NewsCardComponent(article) {
	return (
		<div>
			<Card color='red' raised image={article.urlToImage} />
		</div>
	);
}
