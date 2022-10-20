/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { Alert, TextField, InputAdornment, SvgIcon, Button, Link, Autocomplete, Checkbox, FormControlLabel, Avatar, Switch } from '@mui/material';
import Avatar2Image from 'src/assets/images/Avatar_16.png';
import Avatar3Image from 'src/assets/images/Avatar_15.png';
import Avatar4Image from 'src/assets/images/Avatar_14.png';
import Avatar5Image from 'src/assets/images/Avatar_13.png';
import Avatar6Image from 'src/assets/images/Avatar_12.png';
import Avatar7Image from 'src/assets/images/Avatar_11.png';
import Avatar8Image from 'src/assets/images/Avatar_10.png';
import Avatar9Image from 'src/assets/images/Avatar_9.png';
import Avatar10Image from 'src/assets/images/Avatar_8.png';
import { ReactComponent as RemoveRedEyeFilled1 } from 'src/assets/images/RemoveRedEyeFilled.svg';
import { ReactComponent as RemoveRedEyeFilled2 } from 'src/assets/images/RemoveRedEyeFilled.svg';
import { ReactComponent as RemoveRedEyeFilled3 } from 'src/assets/images/RemoveRedEyeFilled.svg';
import { ReactComponent as ChevronRightFilled1 } from 'src/assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronRightFilled2 } from 'src/assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronLeftFilled1 } from 'src/assets/images/ChevronLeftFilled.svg';
import { ReactComponent as StarFilled1 } from 'src/assets/images/StarFilled.svg';
import { ReactComponent as StarHalfFilled1 } from 'src/assets/images/StarHalfFilled.svg';
import { ReactComponent as StarFilled2 } from 'src/assets/images/StarFilled.svg';
import { styled } from '@mui/material/styles';
import Table from 'src/components/Table/Table';
import { Mui59TestProps } from 'src/types';
import useMui59Test from 'src/components/Mui59Test/useMui59Test';
 
const Mui59Test1: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  width: "100%",  
});
  
const Alerts: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const AlertFilled: any = styled(Alert)({  
  width: `320px`,  
  margin: `0px`,  
});
  
const AlertFilled1: any = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const AlertFilled2: any = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const AlertFilled3: any = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const TextFields: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const TextFieldStandard: any = styled(TextField)({  
  width: `220px`,  
  margin: `0px`,  
});
  
const TextFieldStandard1: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldStandard2: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldFilled: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldFilled1: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldOutlined: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldStandard3: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldFilled2: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldOutlined1: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldStandard4: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldOutlined2: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldFilled3: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldStandard5: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldOutlined3: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const TextFieldFilled4: any = styled(TextField)({  
  width: `220px`,  
  margin: `30px 0px 0px 0px`,  
});
  
const Buttons: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const ButtonContained: any = styled(Button)({  
  margin: `0px`,  
});
  
const ButtonContained1: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained2: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained3: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText1: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText2: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined1: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined2: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined3: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained4: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained5: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText3: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText4: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText5: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined4: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined5: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained6: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText6: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined6: any = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const Icons: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Icon1: any = styled(SvgIcon)(({ theme }: any) =>({  
  color: theme.palette["Action"]["Active (54p)"],  
  margin: `0px`,  
}));
  
const Icon2: any = styled(SvgIcon)(({ theme }: any) =>({  
  color: theme.palette["Action"]["Active (54p)"],  
  margin: `30px 0px 0px 0px`,  
}));
  
const Icon3: any = styled(SvgIcon)(({ theme }: any) =>({  
  color: theme.palette["Action"]["Active (54p)"],  
  margin: `30px 0px 0px 0px`,  
}));
  
const Links: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Link1: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `0px`,  
}));
  
const Link2: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link3: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link4: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link5: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link6: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link7: any = styled(Link)(({ theme }: any) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const AutoComplete: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Autocomplete1: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `0px`,  
});
  
const Autocomplete2: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete3: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete4: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete5: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete6: any = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Checkboxes: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const FormControlLabel1: any = styled(FormControlLabel)({  
  margin: `0px`,  
});
  
const FormControlLabel2: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel3: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel4: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel5: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel6: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel7: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel8: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel9: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel10: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel11: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel12: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel13: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel14: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel15: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel16: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel17: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel18: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel19: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel20: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel21: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel22: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel23: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Avatar1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Avatar2: any = styled(Avatar)({  
  margin: `0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar3: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar4: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Avatar5: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar6: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar7: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Avatar8: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar9: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar10: any = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Switch1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const FormControlLabel24: any = styled(FormControlLabel)({  
  margin: `0px`,  
});
  
const FormControlLabel25: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel26: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel27: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel28: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel29: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel30: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel31: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel32: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel33: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel34: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel35: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel36: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel37: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel38: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel39: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel40: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel41: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const FormControlLabel42: any = styled(FormControlLabel)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Table1: any = styled(Table)(({ theme }: any) =>({  
  width: `600px`,  
  margin: `0px 0px 0px 30px`,  
}));
 
function Mui59Test(props: Mui59TestProps): JSX.Element {
  const {data} = useMui59Test();
    return (
    <Mui59Test1  className={props.className}   >
      <Alerts >
        <AlertFilled variant="filled" severity={"warning"}   > Alert content </AlertFilled>
        <AlertFilled1 variant="filled" severity={"error"}   > Description </AlertFilled1>
        <AlertFilled2 variant="filled" severity={"info"}   > Description </AlertFilled2>
        <AlertFilled3 variant="filled" severity={"success"}   > Description </AlertFilled3>
      </Alerts>
      <TextFields >
        <TextFieldStandard variant="standard" size="medium"  label={`Label`}    />
        <TextFieldStandard1 variant="standard" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldStandard2 variant="standard" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldFilled variant="filled" size="medium"  label={`Label`} helperText="Helper text" InputProps={{endAdornment: <InputAdornment position="end"><SvgIcon sx={{width: "24px", height: "24px"}} component = { RemoveRedEyeFilled1 } /></InputAdornment>}}   />
        <TextFieldFilled1 variant="filled" size="medium"  label={`Label`} helperText="Helper text" InputProps={{endAdornment: <InputAdornment position="end"><SvgIcon sx={{width: "24px", height: "24px"}} component = { RemoveRedEyeFilled2 } /></InputAdornment>}}   />
        <TextFieldOutlined variant="outlined" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldStandard3 variant="standard" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldFilled2 variant="filled" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldOutlined1 variant="outlined" size="medium"  label={`Label`} helperText="Helper text"    />
        <TextFieldStandard4 variant="standard" size="small"  label={`Label`} helperText="Helper text"    />
        <TextFieldOutlined2 variant="outlined" size="small"  label={`Label`} helperText="Helper text"    />
        <TextFieldFilled3 variant="filled" size="small"  label={`Label`} helperText="Helper text" InputProps={{endAdornment: <InputAdornment position="end"><SvgIcon sx={{width: "24px", height: "24px"}} component = { RemoveRedEyeFilled3 } /></InputAdornment>}}   />
        <TextFieldStandard5 variant="standard" size="small"  label={`Label`} helperText="Helper text"    />
        <TextFieldOutlined3 variant="outlined" size="small"  label={`Label`} helperText="Helper text"    />
        <TextFieldFilled4 variant="filled" size="small"  label={`Label`} helperText="Helper text"    />
      </TextFields>
      <Buttons >
        <ButtonContained variant="contained" size="large" color="primary"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled1 } />}  > Large </ButtonContained>
        <ButtonContained1 variant="contained" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled2 } />}  > Large </ButtonContained1>
        <ButtonContained2 variant="contained" size="large" color="info"   startIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronLeftFilled1 } />}  > Large </ButtonContained2>
        <ButtonContained3 variant="contained" size="large" color="success"    > Large </ButtonContained3>
        <ButtonText variant="text" size="large" color="primary"    > Large </ButtonText>
        <ButtonText1 variant="text" size="large" color="info"    > Large </ButtonText1>
        <ButtonText2 variant="text" size="large" color="info"    > Large </ButtonText2>
        <ButtonOutlined variant="outlined" size="large" color="primary"    > Large </ButtonOutlined>
        <ButtonOutlined1 variant="outlined" size="large" color="info"    > Large </ButtonOutlined1>
        <ButtonOutlined2 variant="outlined" size="large" color="success"    > Large </ButtonOutlined2>
        <ButtonOutlined3 variant="outlined" size="large" color="secondary"    > Large </ButtonOutlined3>
        <ButtonContained4 variant="contained" size="medium" color="secondary"    > Medium </ButtonContained4>
        <ButtonContained5 variant="contained" size="medium" color="warning"    > Medium </ButtonContained5>
        <ButtonText3 variant="text" size="medium" color="secondary"    > Medium </ButtonText3>
        <ButtonText4 variant="text" size="medium" color="warning"    > Medium </ButtonText4>
        <ButtonText5 variant="text" size="medium" color="success"    > Medium </ButtonText5>
        <ButtonOutlined4 variant="outlined" size="medium" color="error"    > Medium </ButtonOutlined4>
        <ButtonOutlined5 variant="outlined" size="medium" color="info"    > Medium </ButtonOutlined5>
        <ButtonContained6 variant="contained" size="small" color="error"    > Small </ButtonContained6>
        <ButtonText6 variant="text" size="small" color="error"    > Small </ButtonText6>
        <ButtonOutlined6 variant="outlined" size="small" color="warning"    > Small </ButtonOutlined6>
      </Buttons>
      <Icons >
        <Icon1    fontSize = { "medium"}  component = { StarFilled1}/>
        <Icon2    fontSize = { "large"}  component = { StarHalfFilled1}/>
        <Icon3    fontSize = { "small"}  component = { StarFilled2}/>
      </Icons>
      <Links >
        <Link1 href="#" underline="always"  >Link</Link1>
        <Link2 href="#" underline="hover"  >Link</Link2>
        <Link3 href="#" underline="none"  >Link</Link3>
        <Link4 href="#" underline="always"  >Link</Link4>
        <Link5 href="#" underline="hover"  >Link</Link5>
        <Link6 href="#" underline="none"  >Link</Link6>
        <Link7 href="#" underline="none"  >Link</Link7>
      </Links>
      <AutoComplete >
        <Autocomplete1        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="standard" {...params} fullWidth  label={`Label`}  /> )} />
        <Autocomplete2        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="standard" {...params} fullWidth  label={`Label`}  /> )} />
        <Autocomplete3        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="outlined" {...params} fullWidth  label={`Label`}  /> )} />
        <Autocomplete4        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="filled" {...params} fullWidth  label={`Label`}  /> )} />
        <Autocomplete5        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="outlined" {...params} fullWidth  label={`Label`}  /> )} />
        <Autocomplete6        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="filled" {...params} fullWidth  label={`Label`}  /> )} />
      </AutoComplete>
      <Checkboxes >
        <FormControlLabel1 control={<Checkbox defaultChecked={false} size="small" color="info" />} />
        <FormControlLabel2 control={<Checkbox defaultChecked={false} size="small" color="primary" />} label={`Label`} />
        <FormControlLabel3 control={<Checkbox defaultChecked={false} size="medium" color="primary" />} label={`Label`} />
        <FormControlLabel4 control={<Checkbox defaultChecked={false} size="medium" color="info" />} label={`Label`} />
        <FormControlLabel5 control={<Checkbox defaultChecked={false} size="medium" color="secondary" />} label={`Label`} />
        <FormControlLabel6 control={<Checkbox defaultChecked={false} size="medium" color="error" />} label={`Label`} />
        <FormControlLabel7 control={<Checkbox defaultChecked={false} size="medium" color="warning" />} label={`Label`} />
        <FormControlLabel8 control={<Checkbox defaultChecked={false} size="medium" color="info" />} label={`Label`} />
        <FormControlLabel9 control={<Checkbox defaultChecked={false} size="medium" color="success" />} label={`Label`} />
        <FormControlLabel10 control={<Checkbox defaultChecked={false} size="small" color="secondary" />} label={`Label`} />
        <FormControlLabel11 control={<Checkbox defaultChecked={false} size="small" color="error" />} label={`Label`} />
        <FormControlLabel12 control={<Checkbox defaultChecked={false} size="small" color="warning" />} label={`Label`} />
        <FormControlLabel13 control={<Checkbox defaultChecked={false} size="small" color="info" />} label={`Label`} />
        <FormControlLabel14 control={<Checkbox defaultChecked={false} size="small" color="success" />} label={`Label`} />
        <FormControlLabel15 control={<Checkbox defaultChecked={false} size="small" color="primary" />} label={`Label`} />
        <FormControlLabel16 control={<Checkbox defaultChecked={true} size="medium" color="primary" />} label={`Label`} />
        <FormControlLabel17 control={<Checkbox defaultChecked={false} size="medium" color="primary" />} label={`Label`} />
        <FormControlLabel18 control={<Checkbox defaultChecked={false} size="medium" color="secondary" />} label={`Label`} />
        <FormControlLabel19 control={<Checkbox defaultChecked={false} size="medium" color="error" />} label={`Label`} />
        <FormControlLabel20 control={<Checkbox defaultChecked={false} size="medium" color="warning" />} label={`Label`} />
        <FormControlLabel21 control={<Checkbox defaultChecked={false} size="medium" color="info" />} label={`Label`} />
        <FormControlLabel22 control={<Checkbox defaultChecked={false} size="medium" color="success" />} label={`Label`} />
        <FormControlLabel23 control={<Checkbox defaultChecked={false} size="medium" color="primary" />} label={`Label`} />
      </Checkboxes>
      <Avatar1 >
        <Avatar2 variant="circular" src={Avatar2Image} alt={"Avatar"}   />
        <Avatar3 variant="circular" src={Avatar3Image} alt={"Avatar"}   />
        <Avatar4 variant="circular" src={Avatar4Image} alt={"Avatar"}   />
        <Avatar5 variant="square" src={Avatar5Image} alt={"Avatar"}   />
        <Avatar6 variant="square" src={Avatar6Image} alt={"Avatar"}   />
        <Avatar7 variant="square" src={Avatar7Image} alt={"Avatar"}   />
        <Avatar8 variant="rounded" src={Avatar8Image} alt={"Avatar"}   />
        <Avatar9 variant="rounded" src={Avatar9Image} alt={"Avatar"}   />
        <Avatar10 variant="rounded" src={Avatar10Image} alt={"Avatar"}   />
      </Avatar1>
      <Switch1 >
        <FormControlLabel24 control={<Switch defaultChecked={false} color="info" size="medium" />} />
        <FormControlLabel25 control={<Switch defaultChecked={false} color="success" size="medium" />} />
        <FormControlLabel26 disabled={true} control={<Switch defaultChecked={false} disabled={true} color="info" size="medium" />} />
        <FormControlLabel27 control={<Switch defaultChecked={true} color="primary" size="medium" />} />
        <FormControlLabel28 control={<Switch defaultChecked={true} color="secondary" size="medium" />} />
        <FormControlLabel29 control={<Switch defaultChecked={true} color="error" size="medium" inputProps={{"aria-label": data.aria}} />} />
        <FormControlLabel30 control={<Switch defaultChecked={true} color="warning" size="medium" />} />
        <FormControlLabel31 control={<Switch defaultChecked={true} color="info" size="medium" />} />
        <FormControlLabel32 control={<Switch defaultChecked={true} color="success" size="medium" />} />
        <FormControlLabel33 control={<Switch defaultChecked={false} color="info" size="medium" />} label={"Label"} />
        <FormControlLabel34 control={<Switch defaultChecked={false} color="primary" size="medium" />} label={"Label"} />
        <FormControlLabel35 control={<Switch defaultChecked={true} color="primary" size="medium" />} label={"Label"} />
        <FormControlLabel36 disabled={true} control={<Switch defaultChecked={true} disabled={true} color="info" size="medium" />} label={"Label"} />
        <FormControlLabel37 control={<Switch defaultChecked={false} color="success" size="medium" />} label={"Label"} />
        <FormControlLabel38 control={<Switch defaultChecked={true} color="primary" size="medium" />} label={"Label"} />
        <FormControlLabel39 control={<Switch defaultChecked={true} color="secondary" size="medium" />} label={"Label"} />
        <FormControlLabel40 control={<Switch defaultChecked={true} color="error" size="medium" />} label={"Label"} />
        <FormControlLabel41 control={<Switch defaultChecked={true} color="warning" size="medium" />} label={"Label"} />
        <FormControlLabel42 control={<Switch defaultChecked={true} color="success" size="medium" />} label={"Label"} />
      </Switch1>
      <Table1   />
    </Mui59Test1>
  );
}

export default Mui59Test;
