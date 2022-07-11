import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("StatisticsCreateManyInput", {
  isAbstract: true
})
export class StatisticsCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_offers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rewards?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;
}