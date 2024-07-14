import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger'



function App() {

  const clientId = "1058460692343-i3v2rpjagrhffofmo2p5pmd2tbag1g1t.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider  clientId={clientId}>
        <Messenger />
    </GoogleOAuthProvider>
    
  )
}

export default App
