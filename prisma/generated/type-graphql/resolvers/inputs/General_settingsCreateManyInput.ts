import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("General_settingsCreateManyInput", {
  isAbstract: true
})
export class General_settingsCreateManyInput {
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
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagline?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_restrictions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restriction_mode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startup_page?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  landing_page?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  http_response?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact_two?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_support?: string | undefined;
}
