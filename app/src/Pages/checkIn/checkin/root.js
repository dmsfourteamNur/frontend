import {useEffect, useState} from 'react';
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
  SPopup,
  SLoad
} from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';
import {getAllCheckIn} from '../../../Redux/checkIn/checkinSlice';

export default (props) => {
  const {loading, data, error} = useSelector((state) => state.checkin);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('sdfdf');
    dispatch(getAllCheckIn());
  }, []);

  return (
    <>
      {loading && <SLoad />}
      <SPage title={'CheckIn'} disableScroll>
        <SView center col={'xs-12'} height>
          <SHr height={50} />
          <STable2
            header={[
              {key: 'index', label: '#', width: 50},
              {key: 'CodigoSeguridad', label: 'CodigoSeguridad', width: 130},
              {key: 'Descripcion', label: 'Descripcion', width: 130},
              {key: 'EstadoPaciente', label: 'EstadoPaciente', width: 130},
              {key: 'KeyAsiento', label: 'KeyAsiento', width: 130},
              {key: 'KeyVuelo', label: 'KeyVuelo', width: 130},
              {key: 'NumeroAsiento', label: 'NumeroAsiento', width: 130},
              {
                key: 'equipaje/0/Descripcion',
                label: 'Descripcion E.',
                width: 130
              },
              {
                key: 'equipaje/0/PesoEquipaje',
                label: 'Peso equipaje',
                width: 130
              }
            ]}
            data={data}
          />
          <SView height={40} />
        </SView>
        <FloatButtom
          onPress={() => {
            SNavigation.navigate('/checkin/checkin/registro');
          }}
        />
      </SPage>
    </>
  );
};
