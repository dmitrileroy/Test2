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

import Shape2Image from 'src/assets/images/Frame21_Shape2.svg';
import FrameTestImage from 'src/assets/images/Frame21_Frame_Test.svg';
import Shape3Image from 'src/assets/images/Frame21_Shape3.svg';
import ShapeWithStrokeInsidImage from 'src/assets/images/Frame21_Shape_with_Stroke_inside.svg';
import ShapeWithStrokeOutsiImage from 'src/assets/images/Frame21_Shape_with_Stroke_outside.svg';
import { styled } from '@mui/material/styles';
import Shape1 from 'src/components/Shape1/Shape1';
import Text from 'src/components/Text/Text';
import ImageTest from 'src/components/ImageTest/ImageTest';
import GroupTest from 'src/components/GroupTest/GroupTest';
import OutlinedText from 'src/components/OutlinedText/OutlinedText';
import Shape5 from 'src/components/Shape5/Shape5';
import Path from 'src/components/Path/Path';
import Shape4Rotated from 'src/components/Shape4Rotated/Shape4Rotated';
import { Frame21Props } from 'src/types';

 
const Frame211: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `1282px`,  
  height: `1440px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Shape11: any = styled(Shape1)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `61px`,  
  top: `424px`,  
}));
  
const Shape2: any = styled("img")({  
  height: `auto`,  
  width: `153px`,  
  position: `absolute`,  
  left: `239px`,  
  top: `424px`,  
});
  
const Text1: any = styled(Text)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `239px`,  
  top: `605px`,  
}));
  
const ImageTest1: any = styled(ImageTest)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `239px`,  
  top: `786px`,  
}));
  
const GroupTest1: any = styled(GroupTest)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `239px`,  
  top: `967px`,  
}));
  
const FrameTest: any = styled("img")({  
  height: `auto`,  
  width: `153px`,  
  position: `absolute`,  
  left: `417px`,  
  top: `967px`,  
});
  
const OutlinedText1: any = styled(OutlinedText)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `417px`,  
  top: `605px`,  
}));
  
const Shape3: any = styled("img")({  
  height: `auto`,  
  width: `153px`,  
  position: `absolute`,  
  left: `280px`,  
  top: `1242px`,  
});
  
const Shape51: any = styled(Shape5)(({ theme }: any) =>({  
  width: `138px`,  
  height: `138px`,  
  position: `absolute`,  
  left: `766px`,  
  top: `424px`,  
}));
  
const Path1: any = styled(Path)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `944px`,  
  top: `424px`,  
}));
  
const Shape4Rotated1: any = styled(Shape4Rotated)(({ theme }: any) =>({  
  width: `153px`,  
  height: `157px`,  
  position: `absolute`,  
  left: `595px`,  
  top: `424px`,  
}));
  
const HelloIsItMe: any = styled("div")({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `900`,  
  fontSize: `32px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `33px`,  
  textTransform: `none`,  
  position: `absolute`,  
  left: `91px`,  
  top: `1304px`,  
});
  
const OrYou: any = styled("div")({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `900`,  
  fontSize: `32px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `33px`,  
  textTransform: `none`,  
  position: `absolute`,  
  left: `420px`,  
  top: `1299px`,  
});
  
const Frame22: any = styled("div")({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `698px`,  
  height: `321px`,  
  left: `101px`,  
  top: `79px`,  
  overflow: `hidden`,  
  backgroundColor: "red",  
});
  
const ShapeWithStrokeInsid: any = styled("img")({  
  height: `auto`,  
  width: `153px`,  
  position: `absolute`,  
  left: `119px`,  
  top: `145px`,  
});
  
const ShapeWithStrokeOutsi: any = styled("img")({  
  height: `auto`,  
  width: "100px",  
  position: `absolute`,  
  left: `349px`,  
  top: `119px`,  
  cursor: `pointer`,  
});
 
function Frame21(props: Frame21Props): JSX.Element {
  return (
    <Frame211  className={props.className}   >
      <Shape11   />
      <Shape2  src={Shape2Image} alt={"Shape2"}/>
      <Text1   />
      <ImageTest1   />
      <GroupTest1   />
      <FrameTest  src={FrameTestImage} alt={"Frame Test"}/>
      <OutlinedText1   />
      <Shape3  src={Shape3Image} alt={"Shape3"}/>
      <Shape51   />
      <Path1   />
      <Shape4Rotated1   />
      <HelloIsItMe >
        {"test"}
          </HelloIsItMe>
      <OrYou >
        {`or you`}
          </OrYou>
      <Frame22 >
        <ShapeWithStrokeInsid  src={ShapeWithStrokeInsidImage} alt={"Shape with Stroke inside"}/>
        <ShapeWithStrokeOutsi id={"23"}  onClick={"bye"}  src={ShapeWithStrokeOutsiImage} alt={"Shape with Stroke outside"}/>
      </Frame22>
    </Frame211>
  );
}

export default Frame21;
