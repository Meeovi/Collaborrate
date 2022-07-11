import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProvidersCreateManyInput", {
  isAbstract: true
})
export class ProvidersCreateManyInput {
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
  client_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  host_uri?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url_app?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active?: string | undefined;
}
