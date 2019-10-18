import React from 'react';
import { Card } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react';
import NewsCardComponent from './NewsCardComponent';

export default function NewsCards(props) {
	console.log(props);
	return (
		<div>
			<Grid>
				<Grid.Row>
					{props.articles.length > 0
						? props.articles.map((article, idx) => (
								<Grid.Column width={5}>
									{/* <div className='ui card' key={idx}> */}
									{/* <div className='column'> */}
									<Card
										header={
											article.title.length > 30
												? article.title.substr(0, 50) + '...'
												: article.title
										}
										image={article.urlToImage}
										href={article.url}
										fluid
									/>
									{/* </div> */}
									{/* </div> */}
								</Grid.Column>
						  ))
						: ''}
				</Grid.Row>
			</Grid>
		</div>
	);
}
