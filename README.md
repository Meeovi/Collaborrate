## This Application is in Alpha Release ##

# Collaborrate

A powerful, consistent, and flexible headless content management framework. Built using the Nuxtjs framework, Collaborrate provides headless content management system capabilities for sites of all types. 

https://app.netlify.com/start/deploy?repository=https://github.com/meeovi/Alternatecms

## Features include:

- Collaborrate supports MySQL, SQlite, Postgres, Supabase, SQL Server, CockroachDB
- Extendible system that supports Nuxtjs, Vuejs modules, and Fastify extensions
- Per page & entire system SEO
- Graphql support & Rest Apis with Rest Documentation
- Integrated reporting tools with Sentry integration
- Easily deploy with Netlify
- Enhanced Security with monthly updates
- Designed with Bootstrap and Fontawesome
- Multi-lingual support
- Dashboard sneek peak with your data
- Customer management features including creating & managing customers.
- Flexible Media Manager with Visual Previews, expiration date, and comments (coming soon).
- Filterable datatables with export functionality
- PWA Support with push notifications, desktop notifications, and offline caching
- Mobile, Desktop, and Docker support (coming soon)

and much more. Take a look at www.Collaborrate.com 

## Prerequisites:

You will need:

Git = https://git-scm.com/

Nodejs = https://nodejs.org/en/

We recommend postgres as the database 

rename .sample.env file to .env 

Add your database type to DATABASE_PROVIDER, example is DATABASE_PROVIDER="postgresql" (" " are required)

Add your database credentials to DATABASE_URL, example is DATABASE_URL=postgresql://databaseusername:databasepassword@databasehost:5432/databasename

## Steps to Install - 10 Minute Install

1. git clone https://github.com/meeovi/Collaborrate
2. cd Collaborrate
3. npm install
4. npm run all

Collaborrate will be at: http://localhost:8000

## If you have an existing database

1. git clone https://github.com/meeovi/Collaborrate
2. cd Collaborrate
3. npm install
4. prisma db pull
5. npm run all

## To update Collaborrate

1. npm run alternate-update

Collaborrate will be at: http://localhost:8000

Collaborrate Graphiql Playground will be at: http://localhost:4000/graphql

Collaborrate API Documentation is located at: http://localhost:4000/swagger

More installation and deployment details are located at https://docs.Alternatecms.com