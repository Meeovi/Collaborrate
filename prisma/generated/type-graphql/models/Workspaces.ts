import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Brands } from "../models/Brands";
import { Categories } from "../models/Categories";
import { Customers } from "../models/Customers";
import { Products } from "../models/Products";
import { Projects } from "../models/Projects";
import { Shops } from "../models/Shops";
import { Tasks } from "../models/Tasks";
import { Users } from "../models/Users";

@TypeGraphQL.ObjectType("Workspaces", {
  isAbstract: true
})
export class Workspaces {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customers?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  users?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  tasks?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  brands?: bigint | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shops?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublic?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  projects?: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | null;

  brands_brandsToworkspaces?: Brands | null;

  categories?: Categories | null;

  customers_customersToworkspaces?: Customers | null;

  products_productsToworkspaces?: Products | null;

  projects_projectsToworkspaces?: Projects | null;

  shops_shopsToworkspaces?: Shops | null;

  tasks_tasksToworkspaces?: Tasks | null;

  users_usersToworkspaces?: Users | null;
}
