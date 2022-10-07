import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';

export default ({ url, name, icon }) => {
    return <SView width={150} height={150} center
        onPress={() => {
            SNavigation.navigate(url);
        }}>
        <SHr height={20} />
        <SIcon name={icon} color={STheme.color.primary}></SIcon>
        <SHr height={5} />
        <SText>{name}</SText>
    </SView>
}