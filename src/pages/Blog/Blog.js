import React from 'react';
import Card from 'react-bootstrap/Card';
const Blog = () => {
    return (
        <div>
           <div>
           <Card className='w-75 mx-auto mt-4'>
      <Card.Body>
        <Card.Title>01.What is CORS?</Card.Title>
        <Card.Text>
        Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
        </Card.Text>
      </Card.Body>
    </Card>
           </div>
           <div>
           <Card className='w-75 mx-auto mt-4'>
      <Card.Body>
        <Card.Title>02.What is fairbase ?</Card.Title>
        <Card.Text>
        Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Cross-Platform Solutions. Boost App Engagement. Backed by Google.
        <div>
            <h3>What other options do you have to implement authentication? </h3>
<p>Single-Factor/Primary Authentication. ... Two-Factor Authentication (2FA) ... Single Sign-On (SSO) ... Multi-Factor Authentication (MFA) ... Password Authentication Protocol (PAP) ... Challenge Handshake Authentication Protocol (CHAP) ... Extensible Authentication Protocol (EAP) </p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
           </div>
           <div>
           <Card className='w-75 mx-auto mt-4'>
      <Card.Body>
        <Card.Title>03.How does work node js?</Card.Title>
        <Card.Text>
        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
        </Card.Text>
      </Card.Body>
    </Card>
           </div>
           <div>
           <Card className='w-75 mx-auto mt-4'>
      <Card.Body>
        <Card.Title>04.How Work Privet Router</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redir ected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Card.Text>
      </Card.Body>
    </Card>
           </div>
        </div>
    );
};

export default Blog;