import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mediamanager } from "../models/Mediamanager";
import { Products } from "../models/Products";
import { Workspaces } from "../models/Workspaces";
import { BrandsCount } from "../resolvers/outputs/BrandsCount";

@TypeGraphQL.ObjectType("Brands", {
  isAbstract: true
})
export class Brands {
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
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  product?: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | null;

  products?: Products | null;

  mediamanager?: Mediamanager[];

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => BrandsCount, {
    nullable: true
  })
  _count?: BrandsCount | null;
}
