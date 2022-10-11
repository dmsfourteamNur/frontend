import { useEffect, useState } from "react";

import {
	SHr,
	SIcon, SNavigation, SPage,
	SText,
	STheme,
	SView
} from "servisofts-component";

export default (props) => {
	const [state, setState] = useState({
		data: [],
		// new date()
	});

	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch("http://localhost:8080/tripulante", requestOptions)
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
			<SPage title={"Microservicio Vuelo"} disableScroll>
				<SView center col={"xs-12"} height>
					<SHr height={50} />

					<SText
						center
						col={"xs-12"}
						style={{
							fontSize: 48,
						}}
					>
						Microservicio Vuelo
					</SText>
					<SHr height={50} />

					<SView col={"xs-11 md-10 xl-10"} center row>
						<SView
							width={150}
							height={150}
							center
							onPress={() => {
								SNavigation.navigate("/vuelo/vuelo/operaciones");
							}}
						>
							<SHr height={20} />
							<SIcon name={"BtnOperaciones"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>OPERACIONES</SText>
						</SView>
						<SView
							width={150}
							height={150}
							center
							onPress={() => {
								SNavigation.navigate("/vuelo/vuelo/aeronaves");
							}}
						>
							<SHr height={20} />
							<SIcon name={"BtnAeronave"} color={STheme.color.primary}></SIcon>
							<SHr height={5} />
							<SText>AERONAVES</SText>
						</SView>
						<SView width={150} height={150} center
							onPress={() => {
								SNavigation.navigate("/vuelo/vuelo/tripulaciones");
							}}
						>
							<SHr height={20} />
							<SIcon
								name={"BtnTripulaciones"}
								color={STheme.color.primary}
							></SIcon>
							<SHr height={5} />
							<SText>TRIPULACIONES</SText>
						</SView>

						<SView
							width={110}
							height={110}
							backgroundColor={"#20a6d8"}
							center
							style={{ borderRadius: 16 }}
							onPress={() => {
								SNavigation.navigate("/vuelo/vuelo/vuelosalidas");
							}}
						>
							<SText
								center
								col={"xs-12"}
								style={{
									fontSize: 20,
								}}
							>
								Vuelos Salidas
							</SText>{" "}
						</SView>
						<SView width={10} />

						<SView
							width={110}
							height={110}
							backgroundColor={"#e292d2"}
							center
							row
							style={{
								borderRadius: 16,
								// justifyContent: "center",
								// alignItems: "center",
							}}
							onPress={() => {
								SNavigation.navigate("/vuelo/vuelo/vuelollegadas");
							}}
						>
							<SText
								center
								col={"xs-12"}
								style={{
									fontSize: 20,
								}}
							>
								Vuelos LLegadas
							</SText>
						</SView>
						<SView width={10} />

						<SView height={40} />
					</SView>
					{/* <SText>{JSON.stringify(state.data)}</SText> */}
				</SView>
			</SPage>

			<SHr height={20} />
			{/* <PBarraFooter url={'login'} /> */}
			{/* {this.getCargando()} */}
		</>
	);
};
