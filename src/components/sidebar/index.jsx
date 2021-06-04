import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Sidebar extends Component {
    render() {
        return (
            <div style={{background:'#efefef',padding:'10px'}}>
            
               <div className='d-flex mb-5'>
               <Input 
                   type='search'
                   placeholder='Search'
                   value={this.props.searchTerm}
                   onChange={e => this.props.handleSearch(e.target.value)}
               />
               <Button
               
               color='success'
               className='ml-2'
               onClick={this.toggleModal}
               >
                   New
               </Button>

             

               </div>
            </div>
        );
    }
}

export default Sidebar;