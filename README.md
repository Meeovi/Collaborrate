## This Application is in Alpha Release ##

# AlternateCMS

A powerful, consistent, and flexible headless content management framework. Built using the Nuxtjs framework, AlternateCMS provides headless content management system capabilities for sites of all types. 

https://app.netlify.com/start/deploy?repository=https://github.com/meeovi/alternatecms

## Features include:

- AlternateCMS supports MySQL, SQlite, Postgres, Supabase, SQL Server, CockroachDB
- Blog Functionality with tags, publishing dates, draft, and enhanced editor support
- Extendible system that supports Nuxtjs, Vuejs modules, and Fastify extensions
- Inventory Management System with support for Unlimited Products with product attributes and product types, categories, multi-channel creation, graphql
- Per page & entire system SEO
- Integrated File System Manager
- Powerful Search capabilities integrates with Algolia, Typesense, Meilisearch, itemsAPI, Elasticsearch, and Opensearch extensions
- Graphql support & Rest Apis with Rest Documentation
- Integrated reporting tools and Sentry integration
- Easily deploy with Netlify
- Enhanced Security with monthly updates
- Designed with Bootstrap and Fontawesome
- Multi-lingual support
- Sales features including creation of agreements, invoices, transactions, returns, Sales reports, and more
- Dashboard sneek peak with your data
- Customer management features including creating & managing customers, customer segments, and reviews.
- Manage cities, countries, states, taxes
- Flexible Media Manager with Visual Previews, expiration date, and comments.
- Filterable datatables with export functionality
- PWA Support with push notifications, desktop notifications, and offline caching
- Mobile, Desktop, and Docker support
- Built in ERP (Enterprise Resource Planning) includes Project Management, Checklist, Error Reporting, Visits, Team Scheduler, Deep Dives, Dashboard Creations.

and much more. Take a look at www.alternatecms.com 

## Prerequisites:

You will need:

Git = https://git-scm.com/

Nodejs = https://nodejs.org/en/

We recommend postgres as the database 

rename .sample.env file to .env 

Add your database type to DATABASE_PROVIDER, example is DATABASE_PROVIDER="postgresql" (" " are required)

Add your database credentials to DATABASE_URL, example is DATABASE_URL=postgresql://databaseusername:databasepassword@databasehost:5432/databasename

## Steps to Install - 10 Minute Install

1. git clone https://github.com/meeovi/alternatecms
2. cd alternatecms
3. npm install
4. npm run all

AlternateCMS will be at: http://localhost:8000

AlternateCMS API Documentation is located at: http://localhost:5858

## If you have an existing database

1. git clone https://github.com/meeovi/alternatecms
2. cd alternatecms
3. npm install
4. prisma db pull
5. npm run all

## To update AlternateCMS

1. npm run alternate-update

AlternateCMS will be at: http://localhost:8000

AlternateCMS Graphiql Playground will be at: http://localhost:4000/graphql

AlternateCMS API Documentation is located at: http://localhost:4000/swagger

More installation and deployment details are located at https://docs.alternatecms.com