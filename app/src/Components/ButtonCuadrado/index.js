import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';

export default ({ url, name, icon, fill }) => {
	return <SView width={150} height={150} center
		onPress={() => {
			SNavigation.navigate(url);
		}}>
		<SHr height={20} />
		<SIcon name={icon} fill={fill}></SIcon>
		<SHr height={5} />
		<SText bold>{name}</SText>
	</SView>
}