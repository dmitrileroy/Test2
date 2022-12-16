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
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import HeartImage from 'src/assets/images/Heart.png';
import { ReactComponent as StarBorderFilled1 } from 'src/assets/images/_StarBorderFilled.svg';
import { styled } from '@mui/material/styles';
import useCard18 from 'src/components/Card18/useCard18';

const TypeQuest = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette['Background']['Default'],
  boxShadow: theme.customShadows['Elevation']['4'].boxShadow,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: `390px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: `584px`,
}));

const Image = styled('div', {
  shouldForwardProp: (prop) => !['fns'].includes(prop.toString()),
})(({ fns }) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `287px`,
  margin: `0px`,
  overflow: `hidden`,
  backgroundImage: fns.getBackgroundImage(),
  width: '100px',
}));

const InternalLink = styled(Link)({
  width: '100px',
  textDecoration: `none`,
});

const Price = styled('div')({
  backgroundColor: `rgba(255, 212, 101, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `14px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Price1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `-1px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const InternalLink1 = styled(Link)({
  width: `100%`,
  textDecoration: `none`,
});

const Heart = styled('img')({
  height: `22px`,
  width: `24px`,
});

const Content = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `20px 0px 36px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Content1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Details = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `350px`,
  margin: `0px`,
});

const LowerRow = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const LockUp = styled('div')({
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

const Rating = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon1 = styled(SvgIcon)({
  color: `rgba(101, 101, 101, 1)`,
  width: `16px`,
  height: `16px`,
  margin: `0px`,
});

const Rating1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(148, 148, 148, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  width: `161px`,
  margin: `0px 0px 0px 6px`,
});

const Frame3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `19px 0px 0px 0px`,
});

const PropertyTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(47, 46, 65, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  width: `350px`,
  margin: `0px`,
});

const Price2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `2px 0px 0px 0px`,
}));

function Card18(props) {
  const { data, fns } = useCard18(props);

  return (
    <TypeQuest>
      <InternalLink to="/google.com">
        <Image fns={fns} style={{ width: '200px' }} hello={data.hello}></Image>
      </InternalLink>
      <Price>
        <InternalLink1 to="/quest.ai">
          <Price1>{`$89.99`}</Price1>
        </InternalLink1>
        <Heart src={HeartImage} loading="lazy" alt={'Heart'} />
      </Price>
      <Content>
        <Content1>
          <Details>
            <LowerRow>
              <LockUp>
                <Rating>
                  <Icon1 fontSize={'inherit'} component={StarBorderFilled1} />
                  <Rating1>{`4.69 (239 reviews)`}</Rating1>
                </Rating>
              </LockUp>
            </LowerRow>
          </Details>
          <Frame3>
            <PropertyTitle>{`Description`}</PropertyTitle>
            <Price2>
              {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.Lorem ipsum test to be seen and not read for placement only. `}
            </Price2>
          </Frame3>
        </Content1>
      </Content>
    </TypeQuest>
  );
}

export default Card18;
