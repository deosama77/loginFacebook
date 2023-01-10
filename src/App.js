import FacebookLogin from '@greatsumini/react-facebook-login';
function App() {
  return (<FacebookLogin
          appId="565872312063754"
          onSuccess={(response) => {
            console.log('Login Success!', response);
          }}
          onFail={(error) => {
            console.log('Login Failed!', error);
          }}
          onProfileSuccess={(response) => {
            console.log('Get Profile Success!', response);
          }}
      />
  );
}

export default App;
