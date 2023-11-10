import React from "react";

<script>"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js","https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"</script>

//-----JS for Price Range slider-----

function GetVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = GetVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
        return(
            <>
            <div class="range-slider">
  <span class="rangeValues"></span>
  <input value="1000" min="1000" max="50000" step="500" type="range"/>
  <input value="50000" min="1000" max="50000" step="500" type="range"/>
</div>
            
            </>
        )
  }

  export{GetVals}