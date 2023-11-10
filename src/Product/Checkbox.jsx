import React from "react";


function ColorCheckbox() {
    return (
        <>
            <div className="checkboxmain">
                <div className="colorcheckbox">
                    <h1>Choose Your color:</h1>
                    <form>
                        <input type="checkbox" id="red" name="red" value="color" />
                        <label for="vehicle1"> Red (56)</label><br />
                        <input type="checkbox" id="green" name="green" value="color" />
                        <label for="vehicle2"> Green (54)</label><br />
                        <input type="checkbox" id="blue" name="blue" value="color" />
                        <label for="vehicle3"> Blue (52)</label><br /><br />

                    </form>
                </div>
             
                <div className="colorcheckbox">
                    <h1>Item Condition:</h1>
                    <form>
                        <input type="checkbox" id="new" name="new" value="condition" />
                        <label for="vehicle1"> New (1556)</label><br />
                        <input type="checkbox" id="refurbished" name="refurbished" value="condition" />
                        <label for="vehicle2"> Refurbished (154)</label><br />
                        <input type="checkbox" id="used" name="used" value="condition" />
                        <label for="vehicle3"> Used (52)</label><br /><br />
                        <button value="button" type="submit">Filter</button>
                    </form>
                </div>
                
            </div>

        </>
    )
}
export { ColorCheckbox }