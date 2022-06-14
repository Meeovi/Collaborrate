import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Shipments", {
  isAbstract: true
})
export class Shipments {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speed_grade?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ship_date?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  carrier_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  transit_time?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;
}
