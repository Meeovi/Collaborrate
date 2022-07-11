import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ChannelsMaxAggregate", {
  isAbstract: true
})
export class ChannelsMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_lang!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  include_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_zone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_shipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;
}
