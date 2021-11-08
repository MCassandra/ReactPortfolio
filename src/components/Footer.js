import React from 'react';

const styles = {
    card: {
        background: '#f9b713',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        
        
        

    },
};

function Footer() {
    return (
        <div style={styles.card}>
            <header className="footer">
                <h1>this is a footer</h1>
            </header>
        </div>
    );
}

export default Footer;