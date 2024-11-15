const STUN_SERVERS = [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ];
  
  const TURN_SERVERS = [
    {
      urls: 'turn:yourturnserver.com',
      username: 'username',
      credential: 'password'
    }
  ];
  
  module.exports = {
    iceServers: [...STUN_SERVERS, ...TURN_SERVERS]
  };
  