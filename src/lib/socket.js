import IO from 'socket.io-client';

export const initalizeSocket = () => {
	const socket = IO('/', {
		autoConnect: true
	});
	return socket;
};

export default initalizeSocket;
