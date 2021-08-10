import React from "react";

export class ParkTECmain2 extends React.Component {

    render() {
        if (!this.props.dt) {
            return <>'hola'</>;
        }
        return (<table>
            <tr>
                <th>Plate,</th>
                <th>Arrive time,</th>
                <th>Disponibility,</th>
                <th>Preferential</th>
            </tr>
            {Array.from(this.props.dt.values()).map((number) =>
    <tr> {number.map((number) =><th>{number}</th>)} </tr>)}
        </table>);
    }
}