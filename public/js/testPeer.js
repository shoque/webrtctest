const peer = new Peer("shami");

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
  });