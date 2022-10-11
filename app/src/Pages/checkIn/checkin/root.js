import {useEffect, useState} from 'react';
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
  SPopup
} from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';

export default (props) => {
  const [state, setState] = useState({
    data: []
  });

  useEffect(() => {
    Http.GET(Config.apis.checkIn + 'checkin').then((resp) => {
      setState({data: resp});
    });
  }, []);

  return (
    <SPage title={'CheckIn'} disableScroll>
      <SView center col={'xs-12'} height>
        <SHr height={50} />
        <STable2
          headerColor={STheme.color.info}
          header={[
            {
              key: 'index',
              label: '#',
              width: 50,
              color: STheme.color.danger,
              fontSize: 16,
              font: 'Roboto'
            },
            {key: 'Nombre', label: 'Nombre', width: 130},
            {key: 'Apellido', label: 'Apellido', width: 130, center: true},
            {
              key: 'EmailAddress',
              label: 'EmailAddress',
              width: 130,
              center: true
            },
            {key: 'Tipo', label: 'Personal de', width: 130, center: true},
            {
              key: 'key-editar',
              label: 'Editar',
              width: 50,
              center: true,
              component: (item) => {
                return (
                  <SView
                    onPress={() => {
                      SNavigation.navigate('/tripulacion/tripulante/registro', {
                        key: item
                      });
                    }}>
                    <SIcon name={'Edit'} width={35} />
                  </SView>
                );
              }
            },
            {
              key: 'key-eliminar',
              label: 'Eliminar',
              width: 60,
              center: true,
              component: (key) => {
                return (
                  <SView
                    width={35}
                    height={35}
                    onPress={() => {
                      var obj = state.data.find((o) => o.key == key);
                      SPopup.confirm({
                        title: 'Eliminar',
                        message: '¿Esta seguro de eliminar?',
                        onPress: () => {
                          Http.DELETE(
                            Config.apis.aeronave + 'tripulante/' + obj.key
                          ).then((result) => {
                            window.location.reload();
                          });
                        }
                      });
                    }}>
                    <SIcon name={'Delete'} />
                  </SView>
                );
              }
            }
          ]}
          data={state.data}
          filter={(dta) => {
            if (dta.Estado != '1') return false;
            return true;
          }}
        />
        <SView height={40} />
      </SView>
      <FloatButtom
        onPress={() => {
          SNavigation.navigate('/checkin/checkin/registro');
        }}
      />
    </SPage>
  );
};
