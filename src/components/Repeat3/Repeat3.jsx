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
import { styled } from '@mui/material/styles';
import ProductCard1 from 'src/components/ProductCard1/ProductCard1';

 
const Repeat31 = styled("div")({  
  display: `grid`,  
  position: `relative`,  
  isolation: `isolate`,  
  width: "100%",  
  padding: `50px`,  
  boxSizing: `border-box`,  
  height: `auto`,  
  gridTemplateColumns: `repeat(auto-fit, minmax(200px, 400px))`,  
  columnGap: `40px`,  
  rowGap: `40px`,  
});
  
const ProductCard11 = styled(ProductCard1)(({ theme }) =>({  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
 
function Repeat3(props) {
  
    return (
    <Repeat31  className={props.className}   >
      {undefined && undefined.map((undefined, index) => {
        return (
          <ProductCard11  key={index}  />
        );
      })}
    </Repeat31>
  );
}

export default Repeat3;
