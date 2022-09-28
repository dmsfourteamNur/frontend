import { SComponentContainer, SNavigation } from 'servisofts-component';

import Assets from './Assets';
import Pages from './Pages';

//---------REDUX----------
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import Reducer from './Reducer';
//------------------------
import SSocket, { setProps } from 'servisofts-socket';
import NavBar from './Components/NavBar';

import SConfig from './SConfig';

setProps(SConfig.SocketProps);

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    return (
        <Provider store={store}>
            <SComponentContainer
                debug //para cambio de tema
                socket={SSocket}
                assets={Assets}
                inputs={SConfig.SConfig_Inputs}
                // background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: SConfig.SThemeProps }}>
                <SNavigation props={{
                    prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                    pages: Pages,
                    title: "App reactclean_app",

                }} />
                {/* <SSocket  store={store} identificarse={(props) => {
                     var usuario = props.state.usuarioReducer.usuarioLog;
                    return {
                        data: usuario ? usuario : {},
                        deviceKey: "as-asa-as",
                    }
                }} /> */}
                <NavBar />

            </SComponentContainer>
        </Provider >
    )
}
export default App;