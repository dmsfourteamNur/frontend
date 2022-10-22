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
  SLoad,
  SInput,
  SList,
  SPopup,
  SScrollView2,
  SDate
} from 'servisofts-component';
import {getByIdPersona} from '../../../Redux/checkIn/personaByIdSlice';

export default (props) => {
  const {loading, data, error} = useSelector((state) => state.persona);
  const dispatch = useDispatch();
  const formulario = useRef();
  const checkbox = useRef();
  const [selectAsiento, setSelectAsiento] = useState('');
  const [checkboxSelect, setCheckboxSelect] = useState(true);

  useEffect(() => {
    console.log(JSON.stringify(data));
    // dispatch(getAllCheckIn());
  }, [data]);

  const getPasajero = (id) => {
    console.log(id);
    dispatch(getByIdPersona(id));
  };

  return (
    <SPage hidden>
      <SView col={'xs-12'} row height={100} center>
        <SInput
          icon={
            <SView
              width={30}
              height={30}
              onPress={() => {
                var value = formulario.current.getValue();
                getPasajero(value);
              }}>
              <SIcon name={'Search'} />
            </SView>
          }
          col={'xs-11 md-4'}
          type='number'
          customStyle={'EStyle'}
          ref={formulario}
        />
      </SView>
      <SView col={'xs-12'} row>
        <SView width={15} />
        <SView
          col={'xs-12 md-3'}
          border={'#ddd'}
          style={{borderRadius: 30}}
          center>
          <SText style={{margin: 10}}>Pasajero</SText>
          <SInput
            col={'xs-11 md-8'}
            value={data.keyVenta}
            label={'key'}
            customStyle={'EStyle'}
            disabled
          />
          <SInput
            col={'xs-11 md-8'}
            value={data.nombre}
            label={'Nombre'}
            disabled
            customStyle={'EStyle'}
          />
          <SInput
            col={'xs-11 md-8'}
            value={data.apellido}
            label={'Apellido'}
            disabled
            customStyle={'EStyle'}
          />
          <SInput
            col={'xs-11 md-8'}
            value={data.dni}
            label={'Ci'}
            disabled
            customStyle={'EStyle'}
          />
        </SView>
        <SView width={15} />
        <SView col={'xs-12 md-8'} border={'#ddd'} style={{borderRadius: 30}}>
          <SView col={'xs-12'} row style={{padding: 20}}>
            <SInput
              col={'xs-11 md-6'}
              value={data.origen}
              disabled
              style={{padding: 4}}
              label={'origen'}
              customStyle={'EStyle'}
            />
            <SInput
              col={'xs-11 md-6'}
              value={data.destino}
              disabled
              style={{padding: 4}}
              label={'Destino'}
              customStyle={'EStyle'}
            />
            <SInput
              col={'xs-11 md-6'}
              value={new SDate(data.fechaSalida).toString(
                'dd MONTH yyyy hh:mm'
              )}
              disabled
              style={{padding: 4}}
              label={'Fecha Salida'}
              customStyle={'EStyle'}
            />
            <SInput
              col={'xs-11 md-6'}
              value={new SDate(data.fechaArribe).toString(
                'dd MONTH yyyy hh:mm'
              )}
              disabled
              style={{padding: 4}}
              label={'Fecha Arribe'}
              customStyle={'EStyle'}
            />
          </SView>
          <SView col={'xs-12'} row style={{padding: 20}}>
            <SView col={'xs-6'}>
              <SText>{'Necesita Asistencia'}</SText>
              <SInput
                ref={checkbox}
                type={'checkBox'}
                customStyle={'EStyle'}
                onChangeText={() =>
                  setCheckboxSelect(checkbox.current.getValue())
                }
              />
              {!checkboxSelect && (
                <>
                  <SText style={{marginTop: 5}}>{'Descripción'}</SText>
                  <SInput
                    col={'xs-11 md-12'}
                    style={{padding: 4}}
                    type={'textArea'}
                    customStyle={'EStyle'}
                  />
                </>
              )}
            </SView>
            <SView col={'xs-6'} row height={200}>
              <SScrollView2 disableHorizontal>
                <SList
                  horizontal
                  center
                  data={data.asientos}
                  render={(data) => {
                    return data.disponibilidad == 1 ? (
                      <SView
                        col={'xs-2'}
                        center
                        card
                        style={{margin: 4, backgroundColor: '#fe0000'}}
                        onPress={() => {
                          setSelectAsiento({key: data.key});
                        }}>
                        <SText>{data.numeroAsiento}</SText>
                      </SView>
                    ) : (
                      <SView
                        col={'xs-2'}
                        center
                        card
                        style={
                          selectAsiento == data.key
                            ? {
                                margin: 4,
                                backgroundColor: '#ff0'
                              }
                            : {
                                margin: 4,
                                backgroundColor: '#77dd77'
                              }
                        }
                        onPress={() => {
                          setSelectAsiento(data.key);
                        }}>
                        <SText>{data.numeroAsiento}</SText>
                      </SView>
                    );
                  }}
                />
              </SScrollView2>
            </SView>
            <SButtom
              onPress={() =>
                SPopup.open({
                  key: 'pop',
                  content: (
                    <SView
                      borderRadius={30}
                      col={'xs-12'}
                      height={300}
                      width={300}
                      center={200}
                      backgroundColor={'#929292'}>
                      <SText>ahsa</SText>
                    </SView>
                  )
                })
              }>
              mostrar
            </SButtom>
          </SView>
        </SView>
      </SView>
    </SPage>
  );
};
