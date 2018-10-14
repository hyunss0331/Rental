import React from 'react';

class Confirm extends React.Component {

    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);

        // LISTEN ESC KEY, CLOSE IF PRESSED
        const listenEscKey = (evt) => {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                this.handleClose();
            }
        };

        document.onkeydown = listenEscKey;

    }

    handleClose() {
        document.onkeydown = null;
        this.props.onClose();
    }

    render() {        
        return(
            <div className="search-screen white-text">
                <div className="form">
                    <div className="container">
                        <ul className="search-results">
                            Do you really want to rent this stuff ?
                        </ul>
                        <ul className="search-detail">
                            Lender : {this.props.data.writer}
                        </ul>
                        <ul className="search-detail">
                            Way : Delivery
                        </ul>
                        <ul className="search-detail">
                            Term : 2018-09-11 ~ 2018-11-11
                        </ul>
                        <ul className="search-detail">
                            Price : 50 $
                        </ul>
                        <div className="center">
                            <a className="waves-effect waves-light btn blue lighten-1"
                                onClick={this.handleClose}>CONFIRM</a>
                            <a className="waves-effect waves-light btn red lighten-1"
                                onClick={this.handleClose}>CLOSE</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.propTypes = {
    onClose: React.PropTypes.func,
    data: React.PropTypes.object
};

Confirm.defaultProps = {
    onClose: () => {
        console.error('onClose not defined');
    }
};

export default Confirm;
