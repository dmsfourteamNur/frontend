import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SText, STheme, SView } from 'servisofts-component'

type ButtonType = {
    type?: "outline",
    loading: boolean,
}
export default class Button extends Component<ButtonType> {
    render() {
        return (
            <SView
                col={'xs-11 sm-10 md-8 lg-6 xl-4'}
                height={50}
                center
                backgroundColor={STheme.color.card}
                style={{ borderRadius: 4 }}
                {...this.props}>
                <SText color={STheme.color.text} font={'Roboto'} fontSize={14} bold>
                    {this.props.children}
                </SText>
            </SView>
        )
    }
}