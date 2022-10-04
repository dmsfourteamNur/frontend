import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';



export default (props) => {




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
                            <SIcon name={'Logo'} fill={STheme.color.primary} />
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
                            // ref={(ref) => { this.form = ref; }}
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
                                    placeholder: 'Correo',
                                    isRequired: true,
                                    keyboardType: 'email-address',
                                    autoCapitalize: 'none',
                                    type: 'email',
                                    autoFocus: true,
                                    onKeyPress: (evt) => {
                                        if (evt.key === 'Enter') {
                                            this.form.focus('password');
                                        }
                                    },
                                    icon: (
                                        <SIcon
                                            name={'InputEmail'}
                                            fill={STheme.color.primary}
                                            width={17}
                                            height={20}
                                        />
                                    )
                                },
                                password: {
                                    placeholder: 'Contraseña',
                                    type: 'password',
                                    isRequired: true,
                                    onKeyPress: (evt) => {
                                        if (evt.key === 'Enter') {
                                            this.form.submit();
                                        }
                                    },
                                    icon: (
                                        <SIcon
                                            name={'InputPassword'}
                                            fill={STheme.color.primary}
                                            width={17}
                                            height={20}
                                        />
                                    )
                                }
                            }}
                            onSubmit={(data) => {
                                // if (data) {
                                // data["password"] = CryptoJS.MD5(data["password"]).toString();
                                // Parent.Actions.login(data, this.props);
                                // }
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
                                // this.form.submit();

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