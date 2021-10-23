import React from "react";
import {SpinnerContainer,SpinnerOverlay} from "./with-spinner.styles"

export const WithSpinner=WrappedComponent=>({isloading, ...otherProps})=>{
    return isloading?(
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):
    (<WrappedComponent {...otherProps} />)
}
