import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Gift_certificates", {
  isAbstract: true
})
export class Gift_certificates {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_offers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rewards?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;
}
