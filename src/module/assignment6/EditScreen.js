import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import data from './data/data.json';
import ObjectModal from './ObjectModal';
import StringModal from './StringModal';
// import ArrayModal from './ArrayModal';

const useStyles = makeStyles(() => ({
	root: {
		padding: '40px'
	}
}));

const EditScreen = () => {
	const classes = useStyles();
	const { item } = useParams();

	useEffect(
		() => {
			console.log('datatype', data[item], typeof data[item]);
		},
		[ item ]
	);

	function getStepContent() {
		console.log('item ====>>>> ', item);
		if (typeof data[item] === 'string') {
			return <StringModal obj={data[item]} myObjKey={item} />;
		} else if (typeof data[item] === 'object' && !Array.isArray(data[item])) {
			return <ObjectModal obj={data[item]} myObjKey={item} />;
		} else if (typeof data[item] === 'object' && Array.isArray(data[item])) {
			console.log(data[item]);

			// return data[item].map((e, i) => <ObjectModal obj={e} myObjKey={i} />);
			return <ObjectModal obj={data[item]} myObjKey={item} isArray={true} />;
			// return <ArrayModal mainData={data[item]} />;
		} else {
			return 'Error';
		}
	}

	return <div className={classes.root}>{getStepContent()}</div>;
};

export default EditScreen;
