import React from 'react';
import Layout from '@theme/Layout';

export default function Author() {
  return (
    <Layout
      title="About the Author"
      description="Learn more about the author of this site">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About the Author</h1>
        <p>Hello! I'm Kelvin, a passionate developer and tech enthusiast.</p>
        <p>
          My journey began with a fascination for creating, which quickly turned
          into a love for coding, problem-solving, and sharing knowledge with the world.
        </p>
        <p>
          I enjoy writing about technology, creating tutorials, and building tools to
          help others. Thanks for visiting my site!
        </p>
        <img
          src="/img/propic.jpg" // Replace with your image
          alt="Author"
          style={{ width: '150px', borderRadius: '50%', margin: '1rem 0' }}
        />
      </div>
    </Layout>
  );
}
