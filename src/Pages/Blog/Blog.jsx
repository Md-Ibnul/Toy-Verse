import React from "react";
import { useTitle } from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-container mt-16 mb-10">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">WHY TOYVERSE TOYSTORE</span>
            </span>{" "}
            IS THE BEST SITE TO BUY SUPERHERO TOYS IN BANGLADESH?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Our collection of action figures is unmatched in Bangladesh. We
            stock an extensive range of action figures from the biggest brands,
            including Marvel, DC, Transformers, Anime and more. From classic
            characters like Spider-Man and Batman to newer heroes like Captain
            Marvel and Black Panther, we have it all. No matter what your
            favorite superhero or villain is, you're sure to find them in our
            store.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </p>
              <p className="text-gray-700">
                An access token and a refresh token are both used in
                authentication and authorization processes to grant access to
                protected resources on a server. They serve different purposes
                and have different lifetimes. <br />
                <span>Access Token: </span>
                An access token is a credential that is used to access protected
                resources on a server. It is typically issued to a client (such
                as a mobile app or a website) after the client successfully
                authenticates itself with the server. The access token is
                usually a string of characters that represents the authorization
                granted to the client. It contains information such as the
                client's identity and the permissions associated with that
                identity.
                <br />
                <br />
                <span> Refresh Token: </span>
                A refresh token is a long-lived credential that is used to
                obtain a new access token when the current access token expires.
                It is typically issued together with the access token during the
                authentication process. The refresh token is securely stored on
                the client-side and is used to request a new access token from
                the server without requiring the user to reauthenticate.
                <br />
                Authentication: The client (such as a mobile app or website)
                sends the user's credentials (e.g., username and password) to
                the server for authentication. Token Generation: If the
                credentials are valid, the server generates an access token and
                a refresh token. The access token contains information about the
                user and their permissions, while the refresh token is a
                long-lived token used to obtain a new access token when needed.
                Access Token Usage: The client includes the access token in the
                Authorization header or another designated location (e.g., a
                request parameter or a cookie) when making requests to the
                server. The server validates the access token to ensure that the
                client has the necessary permissions to access the requested
                resource. Access Token Expiration: Access tokens have a limited
                lifespan, typically a short duration (e.g., several minutes or
                hours). When the access token expires, the client needs to
                obtain a new one. Refresh Token Usage: If the access token
                expires, the client can use the refresh token to request a new
                access token from the server without requiring the user to
                reauthenticate. The client sends the refresh token to a token
                endpoint on the server, along with a request for a new access
                token. Token Refresh: The server verifies the refresh token's
                validity and issues a new access token, which is sent back to
                the client. The refresh token itself may remain unchanged or be
                refreshed along with the access token.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Compare SQL and NoSQL databases?
              </p>
              <p className="text-gray-700">
                SQL is a domain-specific language used to query and manage data.
                It works by allowing users to query, insert, delete, and update
                records in relational databases. SQL also allows for complex
                logic to be applied through the use of transactions and embedded
                procedures such as stored functions or views.
                <br />
                <br />
                NoSQL stands for Not only SQL. It is a type of database that
                uses non-relational data structures, such as documents, graph
                databases, and key-value stores to store and retrieve data.
                NoSQL systems are designed to be more flexible than traditional
                relational databases and can scale up or down easily to
                accommodate changes in usage or load. This makes them ideal for
                use in applications.
                <br />
                <br />
                SQL is one of the most versatile and widely-used options
                available which makes it a safe choice, especially for great
                complex queries. But from another side, it can be restrictive.
                SQL requires you to use predefined schemas to determine the
                structure of your data before you work with it. Also, all of
                your data must follow the same structure. A NoSQL database has a
                dynamic schema for unstructured data. Data is stored in many
                ways which means it can be document-oriented, column-oriented,
                graph-based, or organized as a key-value store. This flexibility
                means that documents can be created without having a defined
                structure first. Also, each document can have its own unique
                structure. The syntax varies from database to database, and you
                can add fields as you go. A NoSQL database has a dynamic schema
                for unstructured data. Data is stored in many ways which means
                it can be document-oriented, column-oriented, graph-based, or
                organized as a key-value store. This flexibility means that
                documents can be created without having a defined structure
                first. Also, each document can have its own unique structure.
                The syntax varies from database to database, and you can add
                fields as you go.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is express js? What is Nest JS?
              </p>
              <p className="text-gray-700">
                NestJS is a progressive Node.js framework for building
                efficient, scalable, and reliable server-side applications. It
                is built on top of Express.js and provides a more structured way
                of building applications with TypeScript. NestJS uses a modular
                architecture, making it easy to maintain and scale applications
                as they grow.
                <br />
                <br />
                Express is a minimal and flexible Node.js framework that
                provides a robust set of features for building web and mobile
                applications. It is a lightweight and unopinionated framework
                that allows developers to create applications with their
                preferred tools and libraries. Express is popular among
                developers due to its simplicity and ease of use.
                <br />
                NestJS has several advantages over Express: TypeScript support:
                NestJS is built on top of TypeScript, which provides strong
                typing and better code organization. This makes it easier to
                maintain and scale large applications. Modular architecture:
                NestJS uses a modular architecture, making it easy to maintain
                and scale applications as they grow. Built-in features: NestJS
                comes with several built-in features such as authentication,
                caching, and validation. This reduces the time required to build
                complex applications.
                <br />
                Express also has several advantages over NestJS: Lightweight:
                Express is a lightweight framework that is easy to set up and
                use. It does not have many dependencies, making it ideal for
                small projects. Flexibility: Express is a flexible framework
                that allows developers to create applications with their
                preferred tools and libraries. This makes it easier to customize
                and extend applications. Large community: Express has a large
                community of developers who contribute to its development and
                provide support. This makes it easy to find help and resources
                when needed.
                <br />
                Developer experience: If your development team has experience
                with a particular framework, it may be best to use that
                framework for your project. This can reduce the learning curve
                and increase productivity.
                <br />
                Project size: If you are building a large application with
                complex features, NestJS may be the better option. It provides a
                more structured way of building applications, making it easier
                to maintain and scale as the application grows.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What is MongoDB aggregate and how does it work?
              </p>
              <p className="text-gray-700">
                MongoDB is a database management system that allows you to store
                large amounts of data in documents that are held within larger
                structures known as collections.
                <br />
                As with many other database systems, MongoDB allows you to
                perform a variety of aggregation operations. These allow you to
                process data records in a variety of ways, such as grouping
                data, sorting data into a specific order, or restructuring
                returned documents, as well as filtering data as one might with
                a query. MongoDB provides aggregation operations through
                aggregation pipelines — a series of operations that process data
                documents sequentially. In this tutorial, you’ll learn by
                example how to use the most common features of the aggregation
                pipelines. You’ll filter, sort, group, and transform documents,
                and then use all these features together to form a multi-stage
                processing pipeline.
                <br />
                When working with a database management system, any time you
                want to retrieve data from the database you must execute an
                operation known as a query. However, queries only return the
                data that already exists in the database. In order to analyze
                your data to find patterns or other information about the data —
                rather than the data itself — you’ll often need to perform
                another kind of operation known as an aggregation.
                <br />
                MongoDB enables you to perform aggregation operations through
                the mechanism called aggregation pipelines. These are built as a
                sequential series of declarative data processing operations
                known as stages. Each stage inspects and transforms the
                documents as they pass through the pipeline, feeding the
                transformed results into the subsequent stages for further
                processing. Documents from a chosen collection enter the
                pipeline and go through each stage, where the output coming from
                one stage forms the input for the next one and the final result
                comes at the end of the pipeline.
                <br />
                Stages can perform operations on data such as: <br />
                <strong>filtering:</strong> This resembles queries, where the
                list of documents is narrowed down through a set of criteria. <br />
                <strong>sorting:</strong> You can reorder documents based on a
                chosen field. <br />
                <strong>transforming:</strong> The ability to change the
                structure of documents means you can remove or rename certain
                fields, or perhaps rename or group fields within an embedded
                document for legibility. <br />
                <strong>grouping:</strong> You can also process multiple
                documents together to form a summarized result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
