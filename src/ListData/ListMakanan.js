import React, { Component } from 'react';

class ListMakanan extends Component {
    constructor(props){
        super(props);
        this.state={
            datalist: this.props.listMenuMakanan
        };
    }

    render() { 
        return ( 
            <img src={this.state.datalist} alt="Produk Makanan" width="150"/>
         );
    }
}
 
export default ListMakanan;