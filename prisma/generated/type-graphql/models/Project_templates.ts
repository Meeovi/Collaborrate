import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Project_templates", {
  isAbstract: true
})
export class Project_templates {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consider_working_days?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_manager?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;
}
