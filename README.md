# AlternateCMS
AlternateCMS

A powerful, consistent, and flexible headless content management framework. Built using the Nuxtjs framework, AlternateCMS provides headless content management system capabilities for sites of all types. 

## Features include:

Since AlternateCMS is powered by Nuxtjs it support all of Nuxtjs and Vuejs features and hundreds of modules.

- AlternateCMS supports PostgresSQL, Postgraphile, Supabase, Hasura, and Firebase
- Blog Functionality with tags
- Theme and Extensions support
- Unlimited Products with product attributes and product types
- Per page & entire system SEO
- Create To Do Lists
- Audio and Video management
- Integrated File System Manager
- Powerful Search capabilities
- User authentication and authorization 
- Graphql support & Rest Apis
- Integrated reporting tools and Sentry integration
- Paypal & Stripe payment methods
- Integrated with Netlify
- Enhanced Security with monthly updates
- Integrated with Bootstrap and Fontawesome
- Multi-lingual support
- Sales features including creation of agreements, invoices, transactions, returns, Sales reports, and more
- Charts on main dashboard
- Built in Rest API documentation
- Customer management features including creating, deleting customers, users, staff members
- Manage cities, countries, states, tax rates, and tax rules
- Media Upload & Graphql Media Upload
- Filterable datatables with export functionality
- PWA Support
- Easy integrate with Supabase & Hasura
- Mobile and Desktop support
- Docker Support
- Integrated PM2 support
- Built in DAM (Digital Assest Management) including managing of images for multi-channels including products, retail, wholesale, multiple sites, commenting, sharing, downloading, watermarks, create galleries, save to S3 or filesystem
- Built in PIM (Product Information Management) including powerful multi-channel creation, graphql supported apis, categories, products, product types, attributes
- Built in CRM (Customer Relationship Management) including Cases, Opportunities, Tasks, Accounts, Meetings, Contracts, Leads, Campaigns, Quotes, and more.
- Built in ERP (Enterprise Resource Planning) includes Project Management, Checklist, Error Reporting, Visits, Team Scheduler, Deep Dives, Dashboard Creations.
- Built in LMS (Learning Management System) includes Course Creation, Assign instructors, students, different forms of media, create digital schools, badges, announcements, training material, integrates with products, polls, checklists, cities, states, countries, create meetups, Digital Boards (digiboards), and labs
- Built on top of Nuxtjs & VueJS

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

AlternateCMS will be at: http://localhost:8000

AlternateCMS Graphiql Playground will be at: http://localhost:5000/graphiql

AlternateCMS API Documentation is located at: http://localhost:5858

More installation and deployment details are located at https://docs.alternatecms.com