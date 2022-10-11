import {SHr, SPage, SView} from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default () => {
  return (
    <SPage title={'CheckIn'} disableScroll>
      <SView center col={'xs-12'} height>
        <SHr height={50} />
        <SView col={'xs-11 md-10 xl-10'} center row>
          <ButtonCuadrado
            url='/checkin/checkin'
            name='checkin'
            icon='Checkin'
          />
        </SView>
      </SView>
    </SPage>
  );
};
