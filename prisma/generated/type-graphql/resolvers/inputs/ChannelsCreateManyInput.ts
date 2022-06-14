import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ChannelsCreateManyInput", {
  isAbstract: true
})
export class ChannelsCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_lang?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  include_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_zone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_shipping?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | undefined;
}
