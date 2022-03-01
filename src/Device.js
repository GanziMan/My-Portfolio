import React from "react";

const mydata={
    "myDeviceData":[
        {
            "name":"iPad Pro",
            "RAM":6,
            "HomeButton":false,
            "TuchID":"NO",
            "FaceID":"YES"
        },{
            "name":"iPone Xs",
            "RAM":4,
            "HomeButton":false,
            "TuchID":"NO",
            "FaceID":"YES"
        },{
            "name":"iPad 6",
            "RAM":2,
            "HomeButton":true,
            "TuchID":"NO",
            "FaceID":"YES"
        },

    ]
};
function Device(){
    return(
        <div>
        {
            mydata.myDeviceData.map((myAppleDevice)=> {
                console.log('idx is'+ JSON.stringify(myAppleDevice.name));
                return(
                    <div>
                        이름: {myAppleDevice.name}<br></br>
                        램:{myAppleDevice.RAM}GB<br></br>
                        홈버튼: {((myAppleDevice.HomeButton===true)? '있음':'없음')}<br></br>
                        터치ID:{myAppleDevice.TuchID}<br></br>
                        페이스ID:{myAppleDevice.FaceID}<br></br><br></br>
                    </div>
                );
            })
        }
        </div>
    )
}

export default Device;