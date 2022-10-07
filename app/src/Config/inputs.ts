import { SInputsCofig, STheme } from 'servisofts-component';
const inputs = () => {
    return {
        "default": {
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
