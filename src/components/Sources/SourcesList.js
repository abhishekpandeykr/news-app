import React, { useState, useEffect } from 'react';
import { instance as API } from '../../API/api';
import { Link } from '@reach/router';
import { Container, Card, Header } from 'semantic-ui-react';

export default function SourcesList() {
	let isSource = [];
	const [data, setData] = useState({
		sources: [],
	});
	useEffect(() => {
		fetchSources();
	}, []);

	const fetchSources = function() {
		API.get('sources').then(result => {
			if (result.status === 'ok') {
				setData({ sources: result.sources });
				console.log('===>', data);
			}
		});
	};

	return (
		<Container>
			<Header as='h2' color='green' content='Sources' />
			<Card.Group itemsPerRow={4}>
				{data.sources.length > 0
					? data.sources.map(source => (
							<Card>
								<Card.Content>
									<Card.Header href={source.url}>
										<Link to='/'>{source.name}</Link>
									</Card.Header>
									<Card.Meta>Category :{source.category}</Card.Meta>
									<Card.Description>{source.description}</Card.Description>
								</Card.Content>
							</Card>
					  ))
					: ''}
			</Card.Group>
		</Container>
	);
}
