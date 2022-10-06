import { useEffect, useState } from "react";
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
} from "servisofts-component";
// import 'bootstrap/dist/css/bootstrap.css';

import FloatButtom from "../../../../Components/FloatButtom";

export default (props) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/vuelo", requestOptions)
      // .then(response => response.text())
      .then((response) => response.json())
      .then((result) => {
        state.data = result;
        setState({ ...state });
        // var obj = JSON.parse(state.data )
        console.log(state.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    // <SPage title={'login'} preventBack>
    //     <SText>TODO</SText>
    // </SPage>

    <>
      <SPage title={"Vuelos"} disableScroll>
        <SView center col={"xs-12"} height>
          <SHr height={50} />
          {/* <SView col={'xs-11 md-10 xl-10'} center> */}
          {/* <SView col={'xs-12'} center height={250}> */}
          <STable2
            headerColor={STheme.color.info}
            header={[
              {
                key: "index",
                label: "#",
                width: 50,
                color: STheme.color.danger,
                fontSize: 16,
                font: "Roboto",
              },
              { key: "key", label: "key", width: 130 },

              { key: "nroVuelo", label: "nroVuelo", width: 130 },
              {
                key: "keyAeronave",
                label: "keyAeronave",
                width: 130,
                center: true,
              },
              { key: "origen", label: "origen", width: 130, center: true },
              { key: "destino", label: "destino", width: 130, center: true },
              {
                key: "fechaSalida",
                label: "fechaSalida",
                width: 130,
                center: true,
              },
              {
                key: "fechaArribe",
                label: "fechaArribe",
                width: 130,
                center: true,
              },
              {
                key: "keyTripulacion",
                label: "keyTripulacion",
                width: 130,
                center: true,
              },
              {
                key: "key-editar",
                label: "Editar",
                width: 50,
                center: true,
                component: (item) => {
                  return (
                    <SView
                      onPress={() => {
                        SNavigation.navigate("/vuelo/registro", {key: item});
                      }}
                    >
                      <SIcon name={"Edit"} width={35} />
                    </SView>
                  );
                },
              },
              {
                key: "key-eliminar",
                label: "Eliminar",
                width: 60,
                center: true,
                component: (key) => {
                  return (
                    <SView
                      width={35}
                      height={35}
                      onPress={() => {
                        var obj = data.find((o) => o.key == key);
                        SPopup.confirm({
                          title: "Eliminar",
                          message: "¿Esta seguro de eliminar?",
                          onPress: () => {
                            sector.Actions.eliminar(obj, this.props);
                          },
                        });
                      }}
                    >
                      <SIcon name={"Delete"} />
                    </SView>
                  );
                },
              },
            ]}
            data={state.data}
            // filter={(dta) => {
            //     if (dta.Estado != "1") return false;
            //     return true;
            // }}
          />
          {/* </SView> */}
          <SView height={40} />
          {/* </SView> */}
          {/* <SText>{JSON.stringify(state.data)}</SText> */}
        </SView>

        {/* <form action="/action_page.php">
    <label for="appt">Select a time:</label>
    <input type="time" id="appt" name="appt">
    <input type="submit">
  </form> */}

        <FloatButtom
          onPress={() => {
            SNavigation.navigate("/msVuelo/vuelo/registro");
          }}
        />
      </SPage>

      <SHr height={20} />
    </>
  );
};
