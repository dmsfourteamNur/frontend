import {
  SButtom,
  SHr,
  SIcon,
  SNavigation,
  SPage,
  SText,
  STheme,
  SView,
} from "servisofts-component";

export default (props) => {
  return (
    <SPage hidden disableScroll center>
      <SView
        col={"xs-9 sm-7 md-5 lg-12 xl-12"}
        height={200}
        row
        center
        backgroundColor={"transparent"}
      >
        <SView
          width={100}
          height={100}
          backgroundColor={"#20a6d8"}
          center
          row
          style={{ borderRadius: 8 }}
          onPress={() => {
            SNavigation.navigate("/aeronave");
          }}
        >
          <SText center col={"xs-12"}>
            Microservicio Aeronave
          </SText>
        </SView>
        <SView width={10} />

        <SView
          width={100}
          height={100}
          backgroundColor={"#e292d2"}
          center
          row
          style={{ borderRadius: 8 }}
          onPress={() => {
            SNavigation.navigate("/tripulacion/inicio");
          }}
        >
          <SText center col={"xs-12"}>
            Microservicio Tripulación
          </SText>
        </SView>
        <SView width={10} />

        <SView
          width={100}
          height={100}
          backgroundColor={"#877771"}
          center
          row
          style={{ borderRadius: 8 }}
          onPress={() => {
            SNavigation.navigate("/vuelo/inicio");
          }}
        >
          <SText center col={"xs-12"}>
            Microservicio Vuelo
          </SText>
        </SView>
        <SView width={10} />

        <SView
          width={100}
          height={100}
          style={{ borderRadius: 8 }}
          backgroundColor={"#ffc942"}
          center
          row
          onPress={() => {
            SNavigation.navigate("/venta/inicio");
          }}
        >
          <SText center col={"xs-12"}>
            Microservicio Venta
          </SText>
        </SView>
        <SView width={10} />

        <SView
          width={100}
          height={100}
          backgroundColor={"#7d3b23"}
          center
          style={{ borderRadius: 8 }}
          row
          onPress={() => {
            SNavigation.navigate("/checking/inicio");
          }}
        >
          <SText center col={"xs-12"}>
            Microservicio Checking
          </SText>
        </SView>
        <SView width={10} />
      </SView>
      <SHr />
    </SPage>
  );
};
