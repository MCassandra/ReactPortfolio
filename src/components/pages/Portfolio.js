import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#c7b8bd',
  },
  heading: {
    background: '#f9b713',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      <div style={styles.card}>
        <div style={styles.heading}>Pints and Pixels</div>
        <div style={styles.content}>
          <p>Find your way to your new favorite brew!

            Pixels and Pints is a way to find and save a drink, no matter your location. Fueled by wanderlust and
            the desire to share a pitcher among friends, group Ichiban created Pixels and Pints for the everyday
            person, the average person who wants to find something new.</p>
        </div>

      </div>

      <div style={styles.card}>
        <div style={styles.heading}>Prestige World Wide</div>
        <div style={styles.content}>
          <p>Discuss your favorite artists, bands, and concerts!

            PRESTIGE WORLD WIDE is a forum that allows users to comment and post about their favorite bands or
            artists. PWW users can comment on each others' post to stay connected or simply share their thoughts
            and memories.</p>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.heading}>Tech Blog</div>
        <div style={styles.content}>
          <p>
            Create a CRUD blog site using Node.js, Express, Sequalize, and mySQL. This app requires login and password authentication for users to create, update, and delete posts they create and other users' posts.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.heading}>READme Generator</div>
        <div style={styles.content}>
          This application is a command-line README generator using Node.js and Inquirer. This app takes user input to create a README file the user can use for every project they produce.
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.heading}>Note Taker</div>
        <div style={styles.content}>
          Express app that creates and saves notes
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.heading}>A Wheel Good Time</div>
        <div style={styles.content}>
          coming soon
        </div>
      </div>




    </div>
  );
}
