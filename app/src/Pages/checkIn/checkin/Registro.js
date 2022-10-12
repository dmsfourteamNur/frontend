import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SButtom,
  SForm,
  SHr,
  SIcon,
  SPage,
  SText,
  STheme,
  SView,
  STable2,
  SNavigation,
  SLoad
} from 'servisofts-component';
import Alert from 'servisofts-component/img/Alert';
import Button from '../../../Components/Button';
import Config from '../../../Config';
import Http from '../../../Http';
import {getAllCheckIn} from '../../../Redux/checkIn/checkinSlice';

const Controller = 'checkin';
const API = Config.apis.checkIn;

export default (props) => {
  // const {loading, data, error} = useSelector((state) => state.checkIn);
  // const dispatch = useDispatch();
  const formulario = useRef();

  //   const [state, setState] = useState({
  //     key: SNavigation.getParam('key', '')
  //   });

  //   useEffect(() => {
  //     if (!data || !data.length) {
  //       dispatch(getAllCheckIn());
  //     }
  //   }, []);

  //   useEffect(() => {
  //     Alert('asdsad');
  //   }, [data]);

  //   const registrarCheckIn = async () => {
  //     const params = {
  //       model: deviceInfoModule.getModel(),
  //       os: deviceInfoModule.getSystemName().toUpperCase(),
  //       channel: REACT_APP_CHANNEL,
  //       device_id: unique,
  //       version: REACT_APP_VERSION,
  //       user: '1' // cambiar el usural que estan asignados
  //     };
  //     dispatch(iniciarSessionConHuella(params));
  //   };

  //   if (!state?.data.key && state.key) return <SLoad />;

  return (
    <SPage title={'Registro'}>
      <SHr height={25} />
      <SView col={'xs-12'} center>
        <SForm
          ref={formulario}
          col={'xs-11 sm-10 md-8 lg-6 xl-4'}
          center
          inputs={{
            nombre: {
              label: 'Nombre',
              type: 'text',
              isRequired: true
              //   defaultValue: state.data?.nombre
            }
          }}
          //   onSubmit={(values) => {
          //     if (state.key != '') {
          //       Http.PUT(API + Controller + '/' + state.key, values).then(
          //         (result) => SNavigation.goBack()
          //       );
          //     } else {
          //       Http.POST(API + Controller + '/registro', values).then((result) =>
          //         SNavigation.goBack()
          //       );
          //     }
          //   }}
        />
        <Button
          onPress={() => {
            formulario.current.submit();
          }}>
          {/* {state.key ? 'EDITAR' : 'REGISTRAR'} */}
        </Button>
      </SView>
      <SHr height={25} />
    </SPage>
  );
};
