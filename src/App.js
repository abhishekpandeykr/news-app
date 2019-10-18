import React, { useState, useEffect } from 'react';
import './App.css';
import API from './API/api';
import NewsCards from './components/NewsCards';
import { Container, Grid, Colu } from 'semantic-ui-react';
import HeaderComponent from './components/HeaderComponent';
import LoaderComponent from './components/Loader/LoaderComponent';
import SearchComponent from './components/Search/SearchComponent';
import SearchedResult from './components/SearchedResult/SearchedResult';
import { countries } from './API/country';
import DropdownSearchSelection from './components/Dropdown/DropdownSearchSelection';

function App() {
	let sources = [];
	const [data, setData] = useState({
		isArticleVisible: false,
		articles: [],
		value: '',
		result: [],
		currentCountry: 'in',
	});

	useEffect(() => {
		getHeadlines('in');
		getNewsSources();
	}, []);

	const handleSearchChange = (e, { value }) => {
		updateData('value', value);
	};

	const renderNews = () => {
		let currentComponent = <NewsCards articles={data.articles} />;
		if (data.result && data.result.length > 0) {
			// Searched Component
			currentComponent = <SearchedResult result={data.result} />;
			return currentComponent;
		} else {
			// return default news
			return currentComponent;
		}
	};

	const updateData = (updateKey, updateValue) => {
		// [] ie. it will accept the dynamic keys
		setData({ ...data, [updateKey]: updateValue });
	};

	const getHeadlines = function(value) {
		API.get(`top-headlines?country=${value}`).then(res => {
			setData({ ...data, articles: res.articles, isArticleVisible: true });
		});
	};

	const getNewsSources = function() {
		API.get('sources').then(res => {
			sources = res.sources;
			console.log(sources);
		});
	};

	const searchOnEnter = function(event) {
		if (event.keyCode === 13) {
			if (data.value) {
				API.get(`everything?q=${data.value}`).then(res =>
					updateData('result', res.articles)
				);
			} else {
				updateData('result', []);
			}
		}
	};

	const countryChange = function(event, { value }) {
		// updateData('currentCountry', value);
		// setData({ ...data, currentCountry: value });
		getHeadlines(value);
	};

	return (
		<Container>
			<HeaderComponent />
			<Grid columns={3} divided>
				<Grid.Row>
					<Grid.Column>
						<SearchComponent
							value={data.value}
							onSearchChange={handleSearchChange}
							result={data.result}
							searchOnEnter={searchOnEnter}
						/>
					</Grid.Column>
					<Grid.Column>
						<DropdownSearchSelection
							countries={countries}
							countryChange={countryChange}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			{data.isArticleVisible ? renderNews() : <LoaderComponent />}
		</Container>
	);
}

export default App;
