import { SButtom, SHr, SIcon, SNavigation, SPage, STheme, SView } from 'servisofts-component';
import Http from '../Http';

export default (props) => {
    return (
        <SPage hidden disableScroll center>
            <SButtom type='outline' onPress={() => {
                Http.GET("http://159.223.109.162/api/aeronave/").then(resp => {
                    console.log(resp);
                }).catch(e => {
                    console.log(e)
                })
            }}>TEST</SButtom>
        </SPage>
    );
}