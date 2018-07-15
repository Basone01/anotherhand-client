import IO from 'socket.io-client';

export const initalizeSocket = () => {
	const socket = IO();
	return socket;
};

export default initalizeSocket;
