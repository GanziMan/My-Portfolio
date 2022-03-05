import React from "react";
import styled from "styled-components";
import {FaMobile} from "react-icons/fa";
import { Fa500Px } from "react-icons/fa";
const PJ_li = styled.div`

    table{

        border-spacing: 200px;
    }
  
`;
 
class Profile_PJ extends React.Component {
    render() {
        return (
          
            <div>
                <PJ_li>
                    <div style={{textAlign:"right"}}>                     
                        <table>
                        <tr>
                            <td>1번</td>

                            <td>2번</td>

                            <td>3번</td>
                        </tr>
                        <tr>
                            <td>2_1번</td>

                            <td>2_2번</td>
                            
                            <td>2_3번</td>
                        </tr>
                    </table>
                    </div>
            
                </PJ_li>
            </div>


        )
    }
}

export default Profile_PJ;