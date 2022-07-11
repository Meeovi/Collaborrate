import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comments } from "../models/Comments";
import { Credit_memos } from "../models/Credit_memos";
import { Customer_group } from "../models/Customer_group";
import { Customer_payment } from "../models/Customer_payment";
import { Emails } from "../models/Emails";
import { Mediamanager } from "../models/Mediamanager";
import { Messages } from "../models/Messages";
import { Newsletter_subscribers } from "../models/Newsletter_subscribers";
import { Orders } from "../models/Orders";
import { Projects } from "../models/Projects";
import { Quotes } from "../models/Quotes";
import { Returns } from "../models/Returns";
import { Workspaces } from "../models/Workspaces";
import { CustomersCount } from "../resolvers/outputs/CustomersCount";

@TypeGraphQL.ObjectType("Customers", {
  isAbstract: true
})
export class Customers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_prefix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_suffix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  customer_since?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  confirmed_email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  date_of_birth?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_vat_number?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gender?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  comments?: Comments[];

  credit_memos?: Credit_memos[];

  customer_group_customer_groupTocustomers?: Customer_group[];

  customer_payment?: Customer_payment | null;

  emails?: Emails[];

  mediamanager?: Mediamanager[];

  messages?: Messages[];

  newsletter_subscribers?: Newsletter_subscribers[];

  orders?: Orders[];

  projects?: Projects[];

  quotes?: Quotes[];

  returns?: Returns[];

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => CustomersCount, {
    nullable: true
  })
  _count?: CustomersCount | null;
}
