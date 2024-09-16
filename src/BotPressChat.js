import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Create script elements
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/ef800eeb-67c6-43d2-a155-d002eb49e01b/webchat/v2.1/config.js';
    script2.async = true;
    
    // Append scripts to the body
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    
    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <div id="botpress-webchat" />
    </div>
  );
};

export default BotpressChat;
