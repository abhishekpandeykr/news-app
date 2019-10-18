import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function DropdownSearchSelection({ countries, countryChange }) {
	return (
		<div>
			<Dropdown
				placeholder='Country'
				defaultValue='in'
				search
				selection
				options={countries}
				onChange={countryChange}
			/>
		</div>
	);
}
