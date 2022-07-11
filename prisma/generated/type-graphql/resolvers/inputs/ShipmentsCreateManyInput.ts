import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShipmentsCreateManyInput", {
  isAbstract: true
})
export class ShipmentsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speed_grade?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ship_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  carrier_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  transit_time?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;
}
