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

import React from 'react';
import ArrowImage from 'src/assets/images/AnimTest4_arrow.png';
import { styled } from '@mui/material/styles';
import { animated, useSpring, easings } from 'react-spring';
import useAnimTest4 from 'src/components/AnimTest4/useAnimTest4';
 
const MouseQuest = animated(styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
    })(({ data }) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.15)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `12px 18px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
  height: `90px`,  
})));
  
const Frame1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Top = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const SiteViews = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Percent = animated(styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
    })(({ data }) =>({  
  opacity: `0`,  
  backgroundColor: `rgba(119, 236, 159, 1)`,  
  border: `1px solid rgba(215, 255, 219, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `50px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  width: `50px`,  
  height: `21px`,  
  margin: `0px 0px 0px 10px`,  
})));
  
const Frame11 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px 5px`,  
  boxSizing: `border-box`,  
  height: `24px`,  
  margin: `0px`,  
});
  
const Arrow = styled("img")({  
  height: `10px`,  
  width: `9px`,  
  margin: `0px`,  
});
  
const Text = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `3px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Q10 = styled("div")(({ theme }) =>({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Primary"]["Contrast"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `500`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Q97235 = animated(styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
    })(({ theme, data }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `900`,  
  fontSize: `36px`,  
  letterSpacing: `0.36px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `-8px 0px 0px 0px`,  
})));
 
function AnimTest4(props) {
  const {data, fns} = useAnimTest4();
  
  
  const MouseQuestmouseQuest = { height: `90px`  }
  const MouseQuestmouseType2 = { height: `98px`  }
  const [MouseQuestStateStyles, MouseQuestStateApi] = useSpring(() => ({ from: eval('MouseQuest' + data.currentVariant), config: { duration: 1000 }, delay: 500 }))

  const PercentmouseQuest = { opacity: `0`  }
  const PercentmouseType2 = { opacity: `1`  }
  const [PercentStateStyles, PercentStateApi] = useSpring(() => ({ from: eval('Percent' + data.currentVariant), config: { duration: 1000 }, delay: 500 }))

  const Q97235mouseQuest = { margin: `-8px 0px 0px 0px`  }
  const Q97235mouseType2 = { margin: `0px 0px 0px 0px`  }
  const [Q97235StateStyles, Q97235StateApi] = useSpring(() => ({ from: eval('Q97235' + data.currentVariant), config: { duration: 1000 }, delay: 500 }))

  const switchStateTomouseQuest = (duration = 0, delay = 0, easing = 'linear') => {
    MouseQuestStateApi.start({ ...MouseQuestmouseQuest, delay, config: { duration, easing: easings[easing] } })
    PercentStateApi.start({ ...PercentmouseQuest, delay, config: { duration, easing: easings[easing] } })
    Q97235StateApi.start({ ...Q97235mouseQuest, delay, config: { duration, easing: easings[easing] } })
  };

  const switchStateTomouseType2 = (duration = 0, delay = 0, easing = 'linear') => {
    MouseQuestStateApi.start({ ...MouseQuestmouseType2, delay, config: { duration, easing: easings[easing] } })
    PercentStateApi.start({ ...PercentmouseType2, delay, config: { duration, easing: easings[easing] } })
    Q97235StateApi.start({ ...Q97235mouseType2, delay, config: { duration, easing: easings[easing] } })
  };
  return (
    <MouseQuest  className={props.className}   data={data}  style={{ ...MouseQuestStateStyles }}>
      <Frame1 >
        <Top >
          <SiteViews  onClick={() => {  switchStateTomouseQuest(750, 250, 'easeOutQuart'); fns.setCurrentVariant("mouseQuest");  }}>
            {`Site Views`}
              </SiteViews>
          <Percent data={data}  style={{ ...PercentStateStyles }}>
            <Frame11 >
              <Arrow  src={ArrowImage} alt={"arrow"}/>
              <Text >
                <Q10 >
                  {`10%`}
                    </Q10>
              </Text>
            </Frame11>
          </Percent>
        </Top>
        <Q97235 data={data}  onClick={() => {  switchStateTomouseType2(1000, 250, 'easeOutQuart'); fns.setCurrentVariant("mouseType2");  }} style={{ ...Q97235StateStyles }}>
          {`97,235`}
            </Q97235>
      </Frame1>
    </MouseQuest>
  );
}

export default AnimTest4;
