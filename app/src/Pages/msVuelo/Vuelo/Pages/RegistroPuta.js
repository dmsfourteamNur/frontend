import { useEffect, useRef, useState } from "react";
import {
  SForm,
  SHr,
  SIcon,
  SLoad,
  SNavigation,
  SPage,
  SText,
  STheme,
  SView,
} from "servisofts-component";
import Config from "../../../../Config";

import Http from "../../../../Http";

const Controller = "vuelo";
const API = Config.apis.vuelo;

export default (props) => {
  const formulario = useRef();

  const [state, setState] = useState({
    key: SNavigation.getParam("key"),
  });

  useEffect(() => {
    var requestOptions = {method: "GET",redirect: "follow"};
    fetch("http://localhost:8080/api/vuelo/" + state.key, requestOptions)
      .then((response) => response.json())
      .then((result) => { state.data = result.data; setState({ ...state });})
      .catch((error) => console.log("error", error));}, []);

  if (state.key) {
    if (!state.data) return <SLoad />;
  }

  return (
    <>
      <SPage title={"Registro"}>
        <SView col={"xs-12"} backgroundColor={"red"} center row>
          <SView col={"xs-11 sm-10 md-8 lg-6 xl-6"}>
            <SHr height={25} />

            <SForm
              center
              row
							ref={formulario}
              style={{
                justifyContent: "space-between",
              }}
              inputProps={{
                customStyle: "romeo",
                separation: 16,
                color: STheme.color.text,
              }}
              inputs={{

                nroVuelo: {
                  label: "nroVuelo",
                  type: "text",
                  isRequired: true,
                  placeholder: '0000',
                  defaultValue: state.data?.nroVuelo ?? "xcvcxvxcv55",
                  col: 'lg-12'
                },
                // aeronave: {
                //   label: "Aeronaves",
                //   type: "select",
                //   isRequired: true,
                //   placeholder: 'Seleccionar aeronave',
                //   defaultValue: state.data?.keyAeronave ?? null,
                //   options: [
                //     { key: "Boeing737", content: "Boeing 737" },
                //     { key: "Boeing777", content: "Boeing 777" },
                //     { key: "Boeing787", content: "Boeing 787" },
                //     { key: "AirbusA310", content: "Airbus A310" },
                //     { key: "Avro748", content: "Avro 748" },
                //   ],
                // },
                keyAeronave: {
                  label: "keyAeronave",
                  type: "text",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',
                  defaultValue: state.data?.keyAeronave ?? "a16dc783-85bc-4a24-8d7c-b23eaadb8757",
                  col: 'lg-12'
                },
                origen: {
                  label: "origen",
                  type: "text",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',
                  defaultValue: state.data?.origen ?? "brasil",
                  col: 'lg-12'
                },
                // origen: {
                //   label: "origen",
                //   type: "select",
                //   isRequired: true,
                //   placeholder: 'Seleccionar aeronave',

                //   defaultValue: state.data?.origen ?? false,
                //   options: [
                //     { key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
                //     { key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
                //     { key: "beni-magdalena", content: "Beni - Magdalena" },
                //     { key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
                //     { key: "lpz", content: "La Paz -El Alto" },
                //     { key: "sucre", content: "Sucre" },
                //     { key: "potosi", content: "Potosi" },
                //   ],
                //   col: 'lg-5.5'
                // },

								destino: {
                  label: "destino",
                  type: "text",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',
                  defaultValue: state.data?.destino ?? "oruro",
                  col: 'lg-12'
                },

                // destino: {
                //   label: "destino",
                //   type: "select",
                //   isRequired: true,
                //   placeholder: 'Seleccionar aeronave',
                //   defaultValue: state.data?.destino ?? false,
                //   options: [
                //     { key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
                //     { key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
                //     { key: "beni-magdalena", content: "Beni - Magdalena" },
                //     { key: "cbb", content: "Cochabamba" },
                //     { key: "lpz", content: "La Paz -El Alto" },
                //     { key: "sucre", content: "Sucre" },
                //     { key: "potosi", content: "Potosi" },
                //   ],
                //   col: 'lg-5.5'
                // },
                // fecha1: {
                //   label: "fecha Salida",
                //   type: "date",
                //   isRequired: true,
                //   placeholder: 'ingresar fecha',
                //   defaultValue: state.data?.fechaSalida ?? "2022-10-06",
                //   col: 'lg-5.5'
                // },
                // fecha2: {
                //   label: "fecha Arribe",
                //   type: "date",
                //   isRequired: true,
                //   defaultValue: state.data?.fechaArribe ?? "2022-10-06",
                //   col: 'lg-5.5'
                // },
                fechaSalida: {
                  label: "fecha salida",
                  type: "text",
                  isRequired: true,
                  placeholder: 'ingresar Hora inicio',
                  defaultValue: state.data?.fechaSalida ?? "2022-08-10T20:30:56.235",
                  col: 'lg-5.5'
                },
                fechaArribe: {
                  label: "fecha Fin",
                  type: "text",
                  isRequired: true,
                  placeholder: 'Seleccionar hora fin',
                  defaultValue: state.data?.fechaArribe ?? "2022-08-10T20:50:56.235",
                  col: 'lg-5.5'

                },
                // tripuylacion: {
                //   label: "Tripulacion",
                //   type: "select",
                //   isRequired: true,
                //   placeholder: 'Seleccionar Tripulacion',
                //   defaultValue: state.data?.keyTripulacion ?? false,
                //   options: [
                //     { key: "grupoA", content: "Tripulacion Grupo A" },
                //     { key: "grupoB", content: "Tripulacion Grupo B" },
                //     { key: "grupoC", content: "Tripulacion Grupo C" },
                //     { key: "grupoD", content: "Tripulacion Grupo D" },

                //   ],
                //   col: 'lg-5.5'
                // },
                keyTripulacion: {
                  label: "keyTripulacion",
                  type: "text",
                  isRequired: true,
                  placeholder: 'escribir Tripulacion',
                  defaultValue: state.data?.keyTripulacion ?? "309f298b-9198-48ff-b9c7-9a6246c11111",
                },
              }}
              // onSubmitName={"Registrar"}
              onSubmit={(values) => {

                // var date_regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
                // if (!date_regex.test(values.hora_inicio) || !date_regex.test(values.hora_fin)) {
                //   SPopup.alert("Hora no valida")
                //   return;
                // }

var pollo = JSON.stringify(values);
								var vueloEditado =
								{
 									"nroVuelo": "34784378437834",
								 "keyAeronave": "a16dc783-85bc-4a24-8d7c-b23eaadb8757",
									 "origen": "bbbbb",
								 "destino": "bbbb",
								 "fechaSalida": "2022-08-10T20:30:56.235",
								 "fechaArribe": "2022-08-10T21:30:56.235",
								 "keyTripulacion": "c47bc2f8-6f64-4d97-9ad0-3d151cfdb145"
						 }


						 if (state.key) {

 							Http.PUT(API + Controller + "/" + state.key, vueloEditado).then(result => SNavigation.goBack())
                } else {
 									var requestOptions = {
                    method: "POST",
										body: JSON.stringify(values),
                    redirect: "follow",
                  };
                  fetch("http://localhost:8080/api/vuelo/registro",requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
										.then(result => SNavigation.goBack())
                    .catch((error) => console.log("error", error));
								}
              }}
            />
          </SView>
        </SView>
      </SPage>

      <SView col={"xs-12"} center style={{ bottom: 0 }}>
        <SView
          col={"xs-11 sm-10 md-8 lg-6 xl-4"}
          height={50}
          center
          backgroundColor={STheme.color.card}
          style={{ borderRadius: 4 }}
          onPress={() => {formulario.current.submit();}}>
          <SText color={STheme.color.text} font={"Roboto"} fontSize={14} bold>
            {state.key ? "EDITAR" : "REGISTRAR"}
          </SText>
        </SView>
      </SView>
      <SHr height={25} />
    </>
  );
};
