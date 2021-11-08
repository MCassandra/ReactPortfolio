import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const styles = {
    foot: {
        background: '#f9b713',
        position: 'fixed',
        bottom: 0,
        width: '100%',
},
};

function Footer() {
    return (
        <div style={styles.foot}>
           <a href="www.linkedin.com/in/maria-cassandra-gugol"> <i class="fa fa-linkedin-square fa-4x"></i></a>

           <a href="https://github.com/MCassandra">
           <i class="fa fa-github fa-4x"></i></a>
           
           <a href="mcmgugol@gmail.com">
           <i class="fa fa-google-plus fa-4x"></i></a>
        </div>
    );
}

export default Footer;