import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';
import { Button } from 'react-bootstrap'
import ReactToPrint from 'react-to-print'


function PrintComponent() {

    let componentRef = useRef();
    return (
        <>
            <div id='print-component'>
                {/* button to trigger printing of the component  */}
                <ReactToPrint
                    trigger={() => <Button>Print this out</Button>}
                    content={() => componentRef}
                />
                {/* component to be printed   */}
                <div>
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    )
}

//component to be printed
class ComponentToPrint extends React.Component {
    render() {
        return (
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <h2 style={{ color: "green" }}> Attendance</h2>
                <table className='table text-align table-dark'>
                    <thead >
                      <tr>
                        <th>S/N</th>
                        <th >Name</th>
                        <th >Email</th>
                      </tr>  
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td>john</td>
                            <td>john@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td >peter</td>
                            <td >peter@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PrintComponent