import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DashboardsCreateManyInput", {
  isAbstract: true
})
export class DashboardsCreateManyInput {
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
  client_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tasks?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  checklists?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visits?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;

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
  sales?: string | undefined;
}
