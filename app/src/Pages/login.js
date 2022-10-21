import { useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import Http from '../Http';



export default (props) => {
	const form = useRef();




	return (
		// <SPage title={'login'} preventBack>
		//     <SText>TODO</SText>
		// </SPage>
		<>
			<SPage title={'Login '} center hidden>
				<SView center col={'xs-12'}>
					<SHr height={50} />
					<SView col={'xs-11 md-6 xl-4'} center>
						<SView col={'xs-11'} height={120}>
							<SIcon name={'Logo'} fill={STheme.color.secondary} />
						</SView>
						<SView height={30} />
						{/* {this.getFilter()} */}




						<SView col={'xs-11 sm-10 md-8 lg-6 xl-6'} height={50} row>
							<SView
								col={'xs-6'}
								height
								backgroundColor={STheme.color.primary}
								center>
								<SButtom
									// outline={this.state.filter != 'Pendiente'}
									onPress={() => {
										//   this.setState({ filter: 'Pendiente' });
									}}>
									Inicio Sesión
								</SButtom>
							</SView>
							<SView
								col={'xs-6'}
								height
								center
								backgroundColor={STheme.color.lightGray}>
								<SButtom
									// outline={this.state.filter != 'Historial'}
									onPress={() => {
										//   SNavigation.navigate('usuario/registro');
									}}>
									Registro
								</SButtom>
							</SView>
						</SView>

						<SHr height={20} />

						<SForm
							ref={form}
							props={{ col: 'xs-12' }}
							inputProps={{
								separation: 16,
								color: STheme.color.text,
								height: 64,
								fontSize: 16,
								font: 'Roboto',
								placeholderTextColor: STheme.color.lightGray
							}}
							inputs={{
								usuario: {
									placeholder: 'Usuario',
									isRequired: true,
									autoCapitalize: 'none',
									type: 'text',
									autoFocus: true,
									onKeyPress: (evt) => {
										if (evt.key === 'Enter') {
											form.current.focus('password');
										}
									},
								},
								password: {
									placeholder: 'Contraseña',
									type: 'password',
									isRequired: true,
									onKeyPress: (evt) => {
										if (evt.key === 'Enter') {
											form.current.submit();
										}
									},
								}
							}}
							onSubmit={(data) => {
								console.log(data);
								fetch("https://jtoken.azurewebsites.net/api/token/admin/1234", {
									method: 'GET',
									redirect: 'follow',
								}).then(result => result.text()).then(result => {
									console.log(result)
								}).catch(error => {
									console.log("ASdas")
								});
							}}
						/>

						<SView height={20} />
						<SView col={'xs-11'} height={40} row center>
							<SView col={'xs-3'} height center>
								<SHr color={STheme.color.lightGray} height={1.5}></SHr>
							</SView>
							<SView col={'xs-6'} height center>
								<SText
									fontSize={14}
									color={STheme.color.text}
									font={'LondonMM'}>
									{' '}
									{/* o Iniciar sesión con{' '} */}
									o{' '}
								</SText>
							</SView>
							<SView col={'xs-3'} height center>
								<SHr color={STheme.color.lightGray} height={1.5}></SHr>
							</SView>
						</SView>


						<SView height={10} />
						<SView col={'xs-11'} row center>

							<SButtom type='outline' onPress={() => {
								form.current.submit();

							}}>Login</SButtom>

							{/* <PButtom
                fontSize={20}
                onPress={() => {
                //   this.form.submit();
                }}>
                Login
              </PButtom> */}

							{/* <SView
                                height={50}
                                colSquare
                                center
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    borderColor: STheme.color.lightGray,
                                    borderWidth: 2,
                                    padding: 8
                                }}>
                                <SIcon name={'IconFaceb'} />
                            </SView> */}
						</SView>
						<SView col={'xs-11'} height={50} row center>
							<SView col={'xs-12'} flex height center>
								<SText
									fontSize={14}
									color={STheme.color.text}
									style={{ textDecorationLine: 'underline' }}
									font={'LondonMM'}
									onPress={() => {
										SNavigation.navigate(
											Parent.component + '/recuperarContrasena'
										);
									}}>
									¿Olvidaste tu correo o contraseña?
								</SText>
							</SView>
						</SView>
						<SView height={40} />
					</SView>
				</SView>
			</SPage>

			<SHr height={20} />
			{/* <PBarraFooter url={'login'} /> */}
			{/* {this.getCargando()} */}
		</>
	);
}