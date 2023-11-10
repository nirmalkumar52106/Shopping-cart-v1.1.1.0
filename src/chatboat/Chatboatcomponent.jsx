import {config} from './config.js';
import Chatbot from 'react-chatbot-kit';
import { ActionProvider } from './ActionProvider.js';
import { MessageParser } from './MessageParser.js';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export{MyComponent}