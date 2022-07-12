import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateNestedManyWithoutTicketingInput } from "../inputs/ProjectsCreateNestedManyWithoutTicketingInput";

@TypeGraphQL.InputType("TicketingCreateInput", {
  isAbstract: true
})
export class TicketingCreateInput {
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
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  severity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  team?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requester?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requester_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ticket_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level?: string | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutTicketingInput, {
    nullable: true
  })
  projects_projectsToticketing?: ProjectsCreateNestedManyWithoutTicketingInput | undefined;
}