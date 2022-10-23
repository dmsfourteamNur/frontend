
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";

export default (props) => {


	return (

		<>
			<SPage title={""} disableScroll>
				<SView center col={"xs-12"} height>

					<SText center col={"xs-12"} style={{ fontSize: 48, }}> Microservicio Vuelo</SText>
					<SHr height={50} />

					<SView col={"xs-11 md-10 xl-10"} center row>
						<SView width={150} height={150} center onPress={() => { SNavigation.navigate("/vuelo/vuelo/operaciones"); }}>
							<SHr height={20} />
							<SIcon name={"BtnOperaciones"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>OPERACIONES</SText>
						</SView>
					</SView>

					<SView col={"xs-11 md-10 xl-10"} center row>
						<SView width={150} height={150} center onPress={() => { SNavigation.navigate("/vuelo/vuelo/aeronaves"); }}>
							<SHr height={20} />
							<SIcon name={"BtnAeronave"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>AERONAVES</SText>
						</SView>
						<SView width={150} height={150} center onPress={() => { SNavigation.navigate("/vuelo/vuelo/tripulaciones"); }}>
							<SHr height={20} />
							<SIcon name={"BtnTripulaciones"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>TRIPULACIONES</SText>
						</SView>
					</SView>

					<SView col={"xs-11 md-10 xl-10"} center row>
						<SView width={150} height={150} center onPress={() => { SNavigation.navigate("/vuelo/vuelo/vuelosalidas"); }}>
							<SHr height={20} />
							<SIcon name={"BtnOperaciones"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>VUELO SALIDA</SText>
						</SView>
						<SView width={150} height={150} center onPress={() => { SNavigation.navigate("/vuelo/vuelo/vuelollegadas"); }}>
							<SHr height={20} />
							<SIcon name={"BtnOperaciones"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>VUELO LLEGADA</SText>
						</SView>
					</SView>
					<SView height={50} />
				</SView>
			</SPage>

		</>
	);
};
