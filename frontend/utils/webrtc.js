const peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '5000'
  });
  
  peer.on('call', call => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      call.answer(stream);
      const video = document.createElement('video');
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
      });
    });
  });
  