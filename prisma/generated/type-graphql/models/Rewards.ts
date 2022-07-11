import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Rewards", {
  isAbstract: true
})
export class Rewards {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration?: Date | null;

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
}
