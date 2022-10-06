import { SInputsCofig, STheme } from 'servisofts-component';
const inputs = () => {
    return {
        "default": {
            "LabelStyle": {
                // position: "absolute",
                // top: -10,
                // left: 0,
                // fontSize: 14,
                // width: "100%",
                // color: STheme.color.text,
                // backgroundColor:STheme.color.primary+"22",
                // borderRadius:4,
                // padding:4,
                // backgroundColor: "#E0E0E0" + "55",


            },
            "View": {
                // borderWidth: 2,
                //  borderColor: "#E0E0E0" + "40",
                //  height: 55,
                //  borderRadius: 16,
                //  marginTop: 50,
                paddingStart: 16,
                backgroundColor: STheme.color.card,
            },
            "InputText": {
                // fontSize: 16,
                paddingStart: 8,
                // color: STheme.color.text,
                // backgroundColor: "#E0E0E0" + "55",
                // height: 55,
                // borderRadius: 16,


            },
            "error": {
                // borderRadius: 16,
                borderWidth: 2,
                borderColor: STheme.color.danger,
            },
        },
        "romeo": {
            "LabelStyle": {
                position: "absolute",
                top: -14,
                left: 2,
                fontSize: 16,
                font: "Roboto",
                width: "110%",
                // fontWeight: "bold"
                // color: STheme.color.text,
            },
            "View": {
                height: 55,
                marginTop: 50,
                // paddingEnd: 10,
                // color: STheme.color.text,
            },
            "InputText": {
                fontSize: 16,
                paddingStart: 16,
                // color: STheme.color.text,
                backgroundColor: "#E0E0E0" + "55",
                borderRadius: 8
            },
            "Select": {
                fontSize: 16,
                paddingStart: 16,
                // color: STheme.color.text,
                backgroundColor: "#E0E0E0" + "55",
                borderRadius: 8
            },
            "error": {
                borderWidth: 2,
                borderColor: STheme.color.danger,
                borderRadius: 8
            },
        }
    }
}
export default inputs;
