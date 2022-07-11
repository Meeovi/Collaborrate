import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RewardsMaxAggregate", {
  isAbstract: true
})
export class RewardsMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;
}
