import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable2, SText, STheme, SView } from 'servisofts-component';

class Operacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVuelo: [],
      dataAeronave: [],
      dataTripulacion: []
    };
  }

  componentDidMount() {
    this.cargaAPI();

  }
  cargaAPI() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://190.104.5.211:80/api/vuelo", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.state.dataVuelo = result;
        this.setState({ ...this.state });
        // console.log("carga Vuelo ", this.state.dataVuelo);
      })
      .catch((error) => console.log("error", error));

    fetch("http://190.104.5.211:80/api/aeronave", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.state.dataAeronave = result;
        this.setState({ ...this.state });
        // console.log("carga Aeronave ", this.state.dataAeronave);
      })
      .catch((error) => console.log("error", error));

    fetch("http://190.104.5.211:80/api/tripulacion", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.state.dataTripulacion = result;
        this.setState({ ...this.state });
        // console.log("carga Tripulacion ", this.state.dataTripulacion);
      })
      .catch((error) => console.log("error", error));
  }




  test() {
    var dataas = this.state.dataAeronave;
    Object.keys(dataas).map((key, index) => {
      let obsj = dataas[key]
      if(obsj.keyAeronave =="4c1b48bf-52b9-4246-bb87-4f46b1ea506c") return console.log("puta ",obsj.matricula)
      console.log("chaval " + obsj.matricula)
    });
  }

  render() {

    var dataAlvaro = this.state.dataAeronave;
    if (!dataAlvaro) return <SLoad />
    // this.test();
    return (
      <SPage title={'Operacion'}>


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
            // {
            //   key: "keyAeronave",
            //   label: "keyAeronave",
            //   width: 130,
            //   center: true,
            // },

            {
              key: "keyAeronave",
              label: "Aeronave",
              width: 130,
              center: true,
              render: (keyAeronave) => {
                var obj = this.state.dataAeronave[keyAeronave];

                // Object.keys(dataAlvaro).map((key, index) => {
                  // let obsj = dataAlvaro[key]
                  // if(obsj.keyAeronave == keyAeronave) 
                  // return  obsj.matricula;
                  console.log("bruja ",obj )
                // });
              }
            },

            // {
            //   key: "keyAeronave",
            //   label: "Aeronave",
            //   width: 130,
            //   center: true,
            //   render: (keyAeronave) => {
            //     // var obj_ae = "686fc732-d731-4b29-beae-1ff15816eedb";
            //     let obj = dataAlvaro[keyAeronave];
            //     console.log("romeo ", obj)
            //     // if (!obj) return '-';

            //     // return obj["matricula"];
            //   }
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
          data={this.state.dataVuelo}
        // filter={(dta) => {
        //     if (dta.Estado != "1") return false;
        //     return true;
        // }}
        />
      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state }
};
export default connect(initStates)(Operacion);