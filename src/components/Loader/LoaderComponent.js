import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

function LoaderComponent() {
	return (
		<Segment>
			<Dimmer active>
				<Loader size='massive' />
			</Dimmer>
			<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
		</Segment>
	);
}

export default LoaderComponent;
