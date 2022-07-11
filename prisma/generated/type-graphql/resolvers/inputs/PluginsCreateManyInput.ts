import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PluginsCreateManyInput", {
  isAbstract: true
})
export class PluginsCreateManyInput {
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
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  github_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  screenshots?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publisher_name?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  agree_terms?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publisher_email?: string | undefined;
}
