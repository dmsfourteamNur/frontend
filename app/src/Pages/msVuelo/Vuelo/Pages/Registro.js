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

export default (props) => {
  const formulario = useRef();

  const [state, setState] = useState({
    key: SNavigation.getParam("key"),
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://190.104.5.211:80/api/vuelo/" + state.key, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        state.data = result.data;
        state.form = null;
        setState({ ...state });
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (state.key) {
    if (!state.data) return <SLoad />;
  }

  // alert(state.nota);
  return (
    <>
      <SPage title={"Registro"}>
        <SView col={"xs-12"} backgroundColor={"red"} center row>
          <SView col={"xs-11 sm-10 md-8 lg-6 xl-6"}>
            <SHr height={25} />

            <SForm
              center
              row
              ref={(form) => {
                formulario.current = form;
              }}
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
                  type: "number",
                  isRequired: true,
                  placeholder: '0000',
                  defaultValue: state.data?.nroVuelo ?? "10f45",
                  col: 'lg-12'

                },
                aeronave: {
                  label: "Aeronaves",
                  type: "select",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',
                  defaultValue: state.data?.keyAeronave ?? null,
                  options: [
                    { key: "Boeing737", content: "Boeing 737" },
                    { key: "Boeing777", content: "Boeing 777" },
                    { key: "Boeing787", content: "Boeing 787" },
                    { key: "AirbusA310", content: "Airbus A310" },
                    { key: "Avro748", content: "Avro 748" },
                  ],
                },
                // keyAeronave: {
                //   label: "keyAeronave",
                //   type: "text",
                //   isRequired: true,
                //   placeholder: 'Seleccionar aeronave',
                //   defaultValue: state.data?.keyAeronave ?? null,
                //   col: 'lg-12'
                // },
                origen: {
                  label: "origen",
                  type: "select",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',

                  defaultValue: state.data?.origen ?? false,
                  options: [
                    { key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
                    { key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
                    { key: "beni-magdalena", content: "Beni - Magdalena" },
                    { key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
                    { key: "lpz", content: "La Paz -El Alto" },
                    { key: "sucre", content: "Sucre" },
                    { key: "potosi", content: "Potosi" },
                  ],
                  col: 'lg-5.5'
                },
                destino: {
                  label: "destino",
                  type: "select",
                  isRequired: true,
                  placeholder: 'Seleccionar aeronave',
                  defaultValue: state.data?.destino ?? false,
                  options: [
                    { key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
                    { key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
                    { key: "beni-magdalena", content: "Beni - Magdalena" },
                    { key: "cbb", content: "Cochabamba" },
                    { key: "lpz", content: "La Paz -El Alto" },
                    { key: "sucre", content: "Sucre" },
                    { key: "potosi", content: "Potosi" },
                  ],
                  col: 'lg-5.5'
                },
                fechaSalida: {
                  label: "fecha Salida",
                  type: "date",
                  isRequired: true,
                  placeholder: 'ingresar fecha',
                  defaultValue: state.data?.fechaSalida ?? "2022-10-06",
                  col: 'lg-5.5'
                },
                fechaArribe: {
                  label: "fecha Arribe",
                  type: "date",
                  isRequired: true,
                  defaultValue: state.data?.fechaArribe ?? "2022-10-06",
                  col: 'lg-5.5'
                },
                horaInicio: {
                  label: "Hora salida",
                  type: "time",
                  isRequired: true,
                  placeholder: 'ingresar Hora inicio',
                  defaultValue: state.data?.fechaSalida ?? "20:00 pm",
                  col: 'lg-5.5'
                },
                horaFin: {
                  label: "Hora Fin",
                  type: "time",
                  isRequired: true,
                  placeholder: 'Seleccionar hora fin',
                  defaultValue: state.data?.fechaArribe ?? "21:00 pm",
                  col: 'lg-5.5'

                },
                tripuylacion: {
                  label: "Tripulacion",
                  type: "select",
                  isRequired: true,
                  placeholder: 'Seleccionar Tripulacion',
                  defaultValue: state.data?.keyTripulacion ?? false,
                  options: [
                    { key: "grupoA", content: "Tripulacion Grupo A" },
                    { key: "grupoB", content: "Tripulacion Grupo B" },
                    { key: "grupoC", content: "Tripulacion Grupo C" },
                    { key: "grupoD", content: "Tripulacion Grupo D" },

                  ],
                  col: 'lg-5.5'
                },
                // keyTripulacion: {
                //   label: "keyTripulacion",
                //   type: "text",
                //   isRequired: true,
                //   placeholder: 'escribir Tripulacion',
                //   defaultValue: state.data?.keyTripulacion ?? null,
                // },
              }}
              // onSubmitName={"Registrar"}
              onSubmit={(values) => {

                var date_regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
                if (!date_regex.test(values.hora_inicio) || !date_regex.test(values.hora_fin)) {
                  SPopup.alert("Hora no valida")
                  return;
                }

                // alert(values);
                // console.log("hola " + state.nota);
                var raw = JSON.stringify(values);
                console.log(raw);

                if (state.key) {
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json", 'Access-Control-Allow-Origin',);

                  var requestOptions = {
                    method: "PUT",
                    headers: myHeaders,
                    body: raw,
                    mode: 'no-cors',
                    redirect: "follow",

                  };

                  fetch(
                    "http://localhost:8080/api/vuelo/" + state.key,
                    requestOptions
                  )
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
                } else {
                  var requestOptions = {
                    method: "POST",
                    body: raw,
                    redirect: "follow",
                  };
                  fetch(
                    "http://localhost:8080/api/vuelo/registro",
                    requestOptions
                  )
                    .then((response) => response.text())
                    .then((result) => console.log(result))
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
          onPress={() => {
            // this.form.submit();
            formulario.current.submit();

            // var raw = JSON.stringify({
            //   "nroVuelo": "347843784378988434",
            //   "keyAeronave": "686fc732-d731-4b29-beae-1ff15816eedb",
            //   "origen": "Beni",
            //   "destino": "Santacruz1",
            //   "fechaSalida": "2022-10-10T20:30:56.235-0400",
            //   "fechaArribe": "2022-10-10T21:30:56.235-0400",
            //   "keyTripulacion": "5032fb80-5222-4e0d-a2b6-e3536ad16491",
            // });

            // var requestOptions = {
            //   method: "POST",
            //   body: raw,
            //   redirect: "follow",
            // };

            // fetch("http://localhost:8080/api/vuelo/registro", requestOptions)
            //   .then((response) => response.text())
            //   .then((result) => console.log(result))
            //   .catch((error) => console.log("error", error));
          }}
        >
          <SText color={STheme.color.text} font={"Roboto"} fontSize={14} bold>
            {state.key ? "EDITAR" : "REGISTRAR"}
          </SText>
        </SView>
      </SView>
      <SHr height={25} />
    </>
  );
};
