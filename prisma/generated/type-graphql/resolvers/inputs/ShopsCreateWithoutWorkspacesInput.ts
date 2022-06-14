import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShopsCreateWithoutWorkspacesInput", {
  isAbstract: true
})
export class ShopsCreateWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  polls?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quotes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reviews?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gift_certificates?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoices?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reward_points?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_discounts?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statistics?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stocks?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  physical_store?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;
}
