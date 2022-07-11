import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Workspaces } from "../models/Workspaces";
import { ShopsCount } from "../resolvers/outputs/ShopsCount";

@TypeGraphQL.ObjectType("Shops", {
  isAbstract: true
})
export class Shops {
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
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  polls?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quotes?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reviews?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gift_certificates?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoices?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reward_points?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_discounts?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statistics?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stocks?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  physical_store?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => ShopsCount, {
    nullable: true
  })
  _count?: ShopsCount | null;
}
