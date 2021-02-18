import React from 'react'
import LineTo from 'react-lineto'

export default class App extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="https://mms.businesswire.com/media/20200203005689/en/699026/4/FSD_LOGO_Stack.jpg"
                     alt="aa"
                     className="A"
                     style={{
                         position: "absolute",
                         top: "0"
                     }}
                />
                <img src="https://mms.businesswire.com/media/20200203005689/en/699026/4/FSD_LOGO_Stack.jpg"
                     alt="aa"
                     className="B"
                     style={{
                         position: "absolute",
                         bottom: "0"
                     }}
                />
                <LineTo from="A" to="B"/>
            </div>
        )
    }
}