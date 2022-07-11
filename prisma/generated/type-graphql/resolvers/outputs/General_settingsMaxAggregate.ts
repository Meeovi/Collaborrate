import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("General_settingsMaxAggregate", {
  isAbstract: true
})
export class General_settingsMaxAggregate {
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
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagline!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_restrictions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restriction_mode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startup_page!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  landing_page!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  http_response!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact_two!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_support!: string | null;
}
