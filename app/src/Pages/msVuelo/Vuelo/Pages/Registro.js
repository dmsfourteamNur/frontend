import { useEffect, useState } from "react";
import {
  SForm,
  SHr,
  SLoad,
  SPage,
  SText,
  STheme,
  SView,
} from "servisofts-component";
// import FloatButtom from "../../../Components/FloatButtom";

export default (props) => {
  const [state, setState] = useState({
    key: "31af732a-f894-4f2f-9176-87277cbb1355",
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/vuelo/" + state.key, requestOptions)
      // .then(response => response.text())
      .then((response) => response.json())
      .then((result) => {
        console.log("mopri ", result.data);
        state.data = result.data;
        setState({ ...state });
        // console.log(state.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (!state.data) return <SLoad />;
  return (
    // <SPage title={'login'} preventBack>
    //     <SText>TODO</SText>
    // </SPage>

    <>
      <SPage title={"Registro"}>
        <SView col={"xs-12"} backgroundColor={"transparent"} center row>
          <SView
            col={"xs-11 sm-10 md-8 lg-6 xl-4"}
            backgroundColor={"transparent"}
          >
            <SHr height={25} />

            <SForm
              center
              row
              style={{
                justifyContent: "space-between",
              }}
              inputProps={{
                customStyle: "romeo",
                separation: 16,

                color: STheme.color.text,
                // fontSize: 16,
                // font: "Roboto",
              }}
              inputs={{
                nroVuelo: {
                  label: "nroVuelo",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data.nroVuelo,
                },
                keyAeronave: {
                  label: "keyAeronave",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data.keyAeronave,
                },
                origen: {
                  label: "origen",
                  type: "text",
                  isRequired: true,
                  defaultValue: state.data.origen,
                },
                destino: {
                  label: "destino",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data.destino,
                },
                fechaSalida: {
                  label: "fecha Salida",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data.fechaSalida,
                },
                fechaArribe: {
                  label: "fecha Arribe",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data.fechaArribe,
                },
                keyTripulacion: {
                  label: "keyTripulacion",
                  type: "email",
                  isRequired: true,
                  defaultValue: state.data.keyTripulacion,
                },
              }}
              onSubmitName={"Registrar"}
              onSubmit={(values) => {
                console.log("hola");
                if (state.key) {
                  //   evento.Actions.editar({ ...data, ...values }, this.props);
                } else {
                  //   evento.Actions.registro(values, this.props);
                }
              }}
            />
          </SView>
        </SView>
      </SPage>

      {/* <SView col={"xs-12"} center style={{ bottom: 0 }}>
        <SView
          col={"xs-11 sm-10 md-8 lg-6 xl-4"}
          height={50}
          center
          backgroundColor={STheme.color.card}
          style={{ borderRadius: 4 }}
          onPress={() => {
            this.form.submit();
          }}
        >
          <SText color={STheme.color.text} font={"Roboto"} fontSize={14} bold>
            {state.key ? "EDITAR" : "REGISTRAR"}
          </SText>
        </SView>
      </SView> */}
      <SHr height={25} />
    </>
  );
};
