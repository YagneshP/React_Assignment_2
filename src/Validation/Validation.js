import React from 'react';

function Validation(props) {
	return props.text.length < 6 ? <div>"Text too short"</div> : <div />;
}

export default Validation;
