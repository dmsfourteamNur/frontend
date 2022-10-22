import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SButtom,
  SIcon,
  SPage,
  SText,
  SView,
  SNavigation,
  SInput,
  SList,
  SPopup,
  SScrollView2,
  SDate
} from 'servisofts-component';
import {getByIdPersona} from '../../../Redux/checkIn/personaByIdSlice';
import {checkInregistro} from '../../../Redux/checkIn/registroSlice';

export default (props) => {
  const {loading, data, error} = useSelector((state) => state.persona);
  //   const {dataRegistro} = useSelector((state) => state.registro);
  const dispatch = useDispatch();
  const formulario = useRef();
  const checkbox = useRef();
  const descripcion = useRef();
  const etiqueta = useRef();
  const peso = useRef();
  const desc = useRef();
  const [selectAsiento, setSelectAsiento] = useState({
    key: '',
    numero: 0
  });
  const [checkboxSelect, setCheckboxSelect] = useState(true);
  const [descripcionPaciente, setDescripcionPaciente] = useState('');

  //   useEffect(() => {
  //     console.log(dataRegistro);
  //     if (JSON.stringify(dataRegistro) != {}) {
  //       console.log(JSON.stringify(dataRegistro));
  //       SNavigation.goBack();
  //     }
  //   }, [dataRegistro]);

  const getPasajero = (id) => {
    console.log(id);
    dispatch(getByIdPersona(id));
  };

  const handleSubmit = () => {
    if (selectAsiento.key == '') {
      SPopup.alert('debe elejir un asiento');
    }

    const params = {
      EstadoPaciente: checkbox.current.getValue(),
      Descripcion: descripcionPaciente,
      NumeroAsiento: selectAsiento.numero,
      KeyVenta: data.keyVenta,
      KeyVuelo: data.keyVuelo,
      KeyAsiento: selectAsiento.key,
      EquipajeDto: [
        {
          PesoEquipaje: peso.current.getValue(),
          NumeroEtiqueta: etiqueta.current.getValue(),
          Descripcion: desc.current.getValue()
        }
      ]
    };
    console.log(params);
    dispatch(checkInregistro(params));
    SNavigation.goBack();
  };

  return (
    <SPage hidden height>
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
          height={400}
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
                    ref={descripcion}
                    onChangeText={() =>
                      setDescripcionPaciente(descripcion.current.getValue())
                    }
                  />
                </>
              )}
              <SView col={'xs-12'} row>
                <SText col={'xs-12'} style={{marginTop: 10}}>
                  Registro de Equipaje
                </SText>
                <SInput
                  col={'xs-5'}
                  style={{padding: 4}}
                  customStyle={'EStyle'}
                  placeholder={'peso'}
                  type={'number'}
                  ref={peso}
                />
                <SInput
                  col={'xs-7'}
                  style={{padding: 4}}
                  customStyle={'EStyle'}
                  placeholder={'Etiqueta'}
                  ref={etiqueta}
                />
                <SInput
                  col={'xs-12s'}
                  style={{padding: 4}}
                  placeholder={'descripción'}
                  type={'textArea'}
                  customStyle={'EStyle'}
                  ref={desc}
                />
              </SView>
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
                        style={{margin: 4, backgroundColor: '#fe0000'}}>
                        <SText>{data.numeroAsiento}</SText>
                      </SView>
                    ) : (
                      <SView
                        col={'xs-2'}
                        center
                        card
                        style={
                          selectAsiento.key == data.key
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
                          setSelectAsiento({
                            key: data.key,
                            numero: data.numeroAsiento
                          });
                        }}>
                        <SText>{data.numeroAsiento}</SText>
                      </SView>
                    );
                  }}
                />
              </SScrollView2>
            </SView>
            <SButtom
              style={{backgroundColor: '#0f0', borderRadius: 20, height: 40}}
              onPress={() => handleSubmit()}>
              Guardar
            </SButtom>
          </SView>
        </SView>
      </SView>
    </SPage>
  );
};
