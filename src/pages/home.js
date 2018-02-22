import React from 'react';
import { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>This is home page!</h1>
                <form>
                    <input type="text" name="firstname" id="firstname" />
                    <input type="text" name="lastname" id="lastname" />
                    <input type="email" name="emailadd" id="emailadd" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Home;