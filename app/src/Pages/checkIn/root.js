import {SHr, SPage, SView, SText} from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default () => {
  return (
    <SPage title={'CheckIn'} disableScroll>
      <SView center col={'xs-12'} height>
        <SHr height={50} />
        <SView col={'xs-11 md-10 xl-10'} center row>
		<SText center col={"xs-12"} style={{ fontSize: 48, }}> Microservicio CheckIn</SText>
			<SHr height={50} />
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
