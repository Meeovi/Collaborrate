import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";
import { Mediamanager } from "../models/Mediamanager";
import { CommentsCount } from "../resolvers/outputs/CommentsCount";

@TypeGraphQL.ObjectType("Comments", {
  isAbstract: true
})
export class Comments {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customer_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  customers?: Customers;

  mediamanager?: Mediamanager[];

  @TypeGraphQL.Field(_type => CommentsCount, {
    nullable: true
  })
  _count?: CommentsCount | null;
}
