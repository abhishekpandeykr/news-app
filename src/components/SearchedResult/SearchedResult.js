import React from 'react';
import { Item, Label, Popup } from 'semantic-ui-react';

export default function SearchedResult(props) {
	return (
		<div style={{ margin: '20px' }}>
			<Item.Group>
				{props.result.length > 0
					? props.result.map((story, index) => (
							<Item key={index}>
								<Item.Image src={story.urlToImage} />

								<Item.Content>
									<Item.Header as='a'>{story.title}</Item.Header>
									<Item.Meta>
										<span className='cinema'>
											{new Date(story.publishedAt).toDateString()}
										</span>
									</Item.Meta>
									<Item.Description>{story.description}</Item.Description>
									<Item.Extra>
										<Popup
											content='Author'
											trigger={
												<Label>{story.author ? story.author : 'N/A'}</Label>
											}
										/>
										<Popup
											content='Source'
											trigger={
												<Label
													icon='globe'
													content={
														story.source.name ? story.source.name : 'N/A'
													}
												/>
											}
										/>
									</Item.Extra>
								</Item.Content>
							</Item>
					  ))
					: ''}
			</Item.Group>
		</div>
	);
}
