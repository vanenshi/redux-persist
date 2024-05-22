import ReactDOM from 'react-dom/client'
import App from './App'

const reactRoot = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
reactRoot.render(<App />)
