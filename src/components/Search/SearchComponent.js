import React from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

export default function SearchComponent(props) {
	return (
		<Grid>
			<Grid.Column>
				<Search
					// loading={isLoading}
					// onResultSelect={this.handleResultSelect}
					onSearchChange={props.onSearchChange}
					// results={props.result}
					value={props.value}
					onKeyDown={props.searchOnEnter}
					fluid
					size='big'
					minCharacters={2}
					noResultsMessage
					open={false}
					// {...this.props}
				/>
			</Grid.Column>
		</Grid>
	);
}
