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
    aeronaveData: [],
    tripulacionData: [],
  });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://190.104.5.211:80/api/vuelo", requestOptions)
      // .then(response => response.text())
      .then((response) => response.json())
      .then((result) => {
        state.data = result;
        setState({ ...state });
        // var obj = JSON.parse(state.data )
        console.log(state.data);
      })
      .catch((error) => console.log("error", error));


    fetch("http://190.104.5.211:80/api/aeronave", requestOptions)
      // .then(response => response.text())
      .then((response) => response.json())
      .then((result1) => {
        state.aeronaveData = result1;
        setState({ ...state });
        // var obj = JSON.parse(state.data )
        console.log(state.aeronaveData);
      })
      .catch((error) => console.log("error", error));

    // fetch("http://190.104.5.211:80/api/tripulacion", requestOptions)
    // // .then(response => response.text())
    // .then((response) => response.json())
    // .then((result2) => {
    //   state.tripulacionData = result2;
    //   setState({ ...state });
    //   // var obj = JSON.parse(state.data )
    //   console.log(state.tripulacionData);
    // })
    // .catch((error) => console.log("error", error));

  }, []);

  var dataas = state.aeronaveData;
  Object.keys(state.aeronaveData).map((key, index) => {
    let obsj = state.aeronaveData[key]
    console.log("chaval " + obsj.matricula)
  }
  );

  return (
    <>
      <SPage title={"Operaciones"} disableScroll>
        <SView center col={"xs-12"} height>
          <SHr height={50} />
          {/* <SView col={'xs-11 md-10 xl-10'} center> */}
          {/* <SView col={'xs-12'} center height={250}> */}
          <STable2
            headerColor={STheme.color.info}
            header={[
              // {
              //   key: "index",
              //   label: "#",
              //   width: 50,
              //   color: STheme.color.danger,
              //   fontSize: 16,
              //   font: "Roboto",
              // },
              // { key: "key", label: "key", width: 130 },

              // { key: "nroVuelo", label: "nroVuelo", width: 130 },

              {
                key: "keyAeronave",
                label: "keyAeronave",
                width: 130,
                center: true,
                render: (keyAeronave) => {
                  // var obj_ae = "686fc732-d731-4b29-beae-1ff15816eedb";
                  var obj = state.aeronaveData[keyAeronave];
                  console.log("romeo " + obj)
                  if (!obj) return 'manacanchu';
                  // let obj = state.aeronaveData[keyAeronave]

                  // return obj_ae['matricula'];
                  return obj.matricula;
                }
              },
              // {
              //   key: "keyAeronave",
              //   label: "keyAeronave",
              //   width: 130,
              //   center: true,
              // },


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
                        SNavigation.navigate("/vuelo/registro", { key: item });
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
            SNavigation.navigate("/vuelo/registro");
          }}
        />
      </SPage>

      <SHr height={20} />
    </>
  );
  
};
