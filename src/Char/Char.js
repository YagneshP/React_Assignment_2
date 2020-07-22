import React from 'react';

function Char(props) {
	const text = props.text.split('');
	const characters = text.map((ch, i) => {
		return (
			<div
				key={i}
				onClick={props.delete.bind(this, i)}
				style={{
					display: 'inline-block',
					padding: '16px',
					textAlign: 'center',
					margin: '16px',
					border: '1px solid black'
				}}
			>
				{ch}
			</div>
		);
	});
	return <div>{characters}</div>;
}

export default Char;
