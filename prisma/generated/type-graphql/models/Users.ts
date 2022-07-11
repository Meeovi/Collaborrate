import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Emails } from "../models/Emails";
import { Mediamanager } from "../models/Mediamanager";
import { Messages } from "../models/Messages";
import { Projects } from "../models/Projects";
import { Workspaces } from "../models/Workspaces";
import { UsersCount } from "../resolvers/outputs/UsersCount";

@TypeGraphQL.ObjectType("Users", {
  isAbstract: true
})
export class Users {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  interface_locale?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  permissions?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  emails?: Emails[];

  mediamanager?: Mediamanager[];

  messages?: Messages[];

  projects?: Projects[];

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => UsersCount, {
    nullable: true
  })
  _count?: UsersCount | null;
}
