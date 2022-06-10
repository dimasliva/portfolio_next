import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Navbar from '../layout/Navbar'
import '../styles/toggle.css'

export default function MyApp({Component, pageProps}) {
  const defaultState = {
    toggle: false,
    popup: false,
  }
  const reducer = (state = defaultState, action) => {
    switch(action.type) {

      case "toggle":
        return {...state, toggle: !state.toggle}

      case "show":
        return {...state, popup: !state.popup}

      case "close":
        return {...state, popup: false}

      default:
        return state
    }
  }
  const store = createStore(reducer)
    return (
      <Provider store={store}>
        <Navbar>
            <Component {...pageProps}/>
            <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
            .cursor {
                cursor: pointer
            }
          `}</style>
        </Navbar>
      </Provider>
    )
}