import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './app/styles/index.scss'
import ThemeProvider from "./app/providers/theme/ThemeProvider";
import { store, StoreContext } from './store/store';


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>,
        </ThemeProvider>
    </BrowserRouter>
)
