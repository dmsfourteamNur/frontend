import { useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import JWT from '../JWT';



export default (props) => {
	const form = useRef();

	const user = JWT.getUser();
	if (!user) {
		SNavigation.navigate("/")
	}

	return (
		<SPage title={'Profile'} >
			<SView center col={'xs-12'}>
				<SText>{JSON.stringify(user)}</SText>
				<SHr />
				<SButtom type='outline' onPress={() => {
					JWT.logout();
				}}>Cerrar session</SButtom>

			</SView>
		</SPage>
	);
}