// YourAppComponent.js

import { useContext } from 'react';
import { ThemeContext } from '../Context/Maincontext';

const AppComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: theme === 'light' ? '20px' : '30px',
        borderRadius: theme === 'light' ? '10px' : '20px',
        width: "50%",
        textAlign: "center",
        margin: "auto"
      }}
    >
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
};

export default AppComponent;