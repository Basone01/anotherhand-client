import React from 'react';
import styled from 'styled-components';
import Loading from 'react-loader-spinner';
import { withStore } from '../../store';
import { Observer } from 'mobx-react';
const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(50, 115, 220, 0.3);
	z-index: 99;
`;
export const LoadingSpinner = ({ AppState }) => {
	console.log(AppState.isSpinnerDisplay);
	return (
		<Observer>
			{() =>
				AppState.isSpinnerDisplay && (
					<Overlay>
						<Loading type="ThreeDots" color="rgb(255,255,255)" height={80} width={80} />
					</Overlay>
				)}
		</Observer>
	);
};
export default withStore(LoadingSpinner, 'AppState');
