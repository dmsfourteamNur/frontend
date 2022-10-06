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
        <SView col={"xs-12"} backgroundColor={"transparent"} center row>
          <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
            <SHr height={25} />

            <SForm
              center
              row
              ref={(form) => {
                formulario.current = form;

                // state.form = form;
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
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.nroVuelo,
                  col: 'lg-5.5'

                },
                keyAeronave: {
                  label: "keyAeronave",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.keyAeronave,
                  col: 'lg-5.5'

                },
                origen: {
                  label: "origen",
                  type: "select",
                  isRequired: true,
                  // defaultValue: state.data?.origen,
                  defaultValue: state.data?.origen ?? false,
                  options: [
                    { key: false, content: "NO" },
                    { key: true, content: "SI" },
                  ],
                },
                destino: {
                  label: "destino",
                  type: "select",
                  isRequired: true,
                  // defaultValue: state.data?.destino,
                  defaultValue: state.data?.destino ?? false,
                  options: [
                    { key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
                    { key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
                    { key: "cbb", content: "Cochabamba" },
                    { key: "lpz", content: "La Paz" },
                    { key: "sucre", content: "Sucre" },
                    { key: true, content: "SI" },
                  ],
                },
                // requerido: { label: "Requerido?", type: "select", defaultValue: default_data["requerido"] ?? false, options: [{ key: false, content: "NO" }, { key: true, content: "SI" }], style: { backgroundColor: "#FF9AA3", } },

                fechaSalida: {
                  label: "fecha Salida",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.fechaSalida,
                },
                fechaArribe: {
                  label: "fecha Arribe",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.fechaArribe,
                },
                keyTripulacion: {
                  label: "keyTripulacion",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.keyTripulacion,
                },
                fecha: { label: "fecha", type: "date", isRequired: true, defaultValue: " " },
                Apellidos: {
                  placeholder: 'Apellidos',
                  isRequired: true,
                  defaultValue: 'siles',
                  icon: (
                    <SIcon
                      name={'InputUser'}
                      fill={STheme.color.primary}
                      width={17}
                      height={20}
                    />
                  )
                },

                hora_inicio: { label: "Hora Inicio", type: "text", isRequired: true, defaultValue: "" },
                // hora_fin: { label: "Hora Fin", type: "text", isRequired: true, defaultValue: data["hora_fin"] },

              }}
              onSubmitName={"Registrar"}
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
                  myHeaders.append("Content-Type", "application/json",'Access-Control-Allow-Origin', );

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
