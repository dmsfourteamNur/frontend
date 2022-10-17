import {SComponentContainer, SNavigation} from 'servisofts-component';
import Assets from './Assets';
import Config from './Config';
import Pages from './Pages';
import Redux from './Redux';

const App = (props) => {
  return (
    <Redux>
      <SComponentContainer
        debug //para cambio de tema
        assets={Assets}
        inputs={Config.inputs}
        theme={{themes: Config.theme}}>
        <SNavigation props={{pages: Pages, title: 'FourTeam'}} />
      </SComponentContainer>
    </Redux>
  );
};
export default App;
