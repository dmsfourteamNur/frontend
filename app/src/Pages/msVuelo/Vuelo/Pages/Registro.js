import { useEffect, useState } from "react";
import {
  SForm,
  SHr,
  SLoad,
  SNavigation,
  SPage,
  SText,
  STheme,
  SView,
} from "servisofts-component";

export default (props) => {
  const [state, setState] = useState({
    key: SNavigation.getParam("key"),
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/vuelo/" + state.key, requestOptions)
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
                state.form = form;
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
                },
                keyAeronave: {
                  label: "keyAeronave",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.keyAeronave,
                },
                origen: {
                  label: "origen",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data?.origen,
                },
                destino: {
                  label: "destino",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data?.destino,
                },
                fechaSalida: {
                  label: "fecha Salida",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data?.fechaSalida,
                },
                fechaArribe: {
                  label: "fecha Arribe",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data?.fechaArribe,
                },
                keyTripulacion: {
                  label: "keyTripulacion",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data?.keyTripulacion,
                },
              }}
              onSubmitName={"Registrar"}
              onSubmit={(values) => {
                // alert(values);
                console.log("bien");
                // console.log("hola " + state.nota);
                // if (state.key) {
                //   evento.Actions.editar({ ...data, ...values }, this.props);
                // } else {
                //   evento.Actions.registro(values, this.props);
                // }
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
            this.form.submit();

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
