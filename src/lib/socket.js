import IO from 'socket.io-client';

export const initalizeSocket = () => {
	const socket = IO(process.env.REACT_APP_API, {
		autoConnect: true
	});
	return socket;
};

export default initalizeSocket;
