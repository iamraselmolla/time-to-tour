import React from 'react';
import Table from 'react-bootstrap/Table';
import useTitle from '../../hooks/Usetitle';


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="container py-5">
            <div className="row">
                <h3 className="fw-bolder text-start">
                    1. Difference between SQL and NoSQL
                </h3>
                <Table striped bordered hover>
                    <thead>
                        <tr className='fs-3'>
                            <th>SQL	</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	</th>
                            <th>Non-relational or distributed database system.</th>
                        </tr>
                        <tr>
                            <th>These databases have fixed or static or predefined schema	</th>
                            <th>They have dynamic schema</th>
                        </tr>
                        <tr>
                            <th>These databases are best suited for complex queries.	</th>
                            <th>These databases are best suited for hierarchical data storage.</th>
                        </tr>
                        <tr>
                            <th>Vertically Scalable	</th>
                            <th>Horizontally scalable
                            </th>
                        </tr>
                        <tr>
                            <th>Follows ACID property		</th>
                            <th>Follows CAP consistency, availability, partition tolerance</th>
                        </tr>
                        <tr>
                            <th>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc		</th>
                            <th>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="row text-start">
                <h3 className="fw-bolder">
                    2. What is JWT, and how does it work?
                </h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
            <div className="row mt-3 text-start">
                <h3 className="fw-bolder">
                    3. What is the difference between javascript and NodeJS?
                </h3>
                <Table className='text-center' striped bordered hover><tbody><tr><td className='fs-3 fw-bold'>JavaScript</td><td className='fs-3 fw-bold'>Node.js</td></tr><tr><td>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</td><td>It's a bridge, open-source Js runtime environment for executing Js on the server.</td></tr><tr><td>It's a programming language, after all. Any browser with a competent browser engine will operate.</td><td>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</td></tr><tr><td>It's most commonly used on client-side servers.</td><td>It's mainly popular on the server-side.</td></tr><tr><td>The node community does not care about JavaScript.</td><td>All node projects represent the JavaScript community.</td></tr><tr><td>It's made for creating network-centric apps.</td><td>It's made for real-time data-intensive apps that run on multiple platforms.</td></tr><tr><td>It's a new release of the ECMA script that works on the C++-based V8 engine.</td><td>C++, C, and JavaScript are used.</td></tr><tr><td>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</td><td>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</td></tr></tbody></Table>

            </div>
            <div className="row mt-3 text-start">
                <h3 className="fw-bolder">
                    4. How does NodeJS handle multiple requests at the same time?
                </h3>
                <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.

                    How NodeJS handle multiple client requests?

                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>

            </div>
        </div>
    );
};

export default Blog;