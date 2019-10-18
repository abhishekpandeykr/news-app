import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';

export default function HeaderComponent() {
	return (
		<div>
			<Header as='h2' icon textAlign='center'>
				<Icon name='rss' circular />
				<Header.Content>HeadLines</Header.Content>
			</Header>
		</div>
	);
}
