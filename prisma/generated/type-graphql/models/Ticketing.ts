import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Projects } from "../models/Projects";
import { TicketingCount } from "../resolvers/outputs/TicketingCount";

@TypeGraphQL.ObjectType("Ticketing", {
  isAbstract: true
})
export class Ticketing {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  severity?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  team?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requester?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requester_email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ticket_type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level?: string | null;

  projects_projectsToticketing?: Projects[];

  @TypeGraphQL.Field(_type => TicketingCount, {
    nullable: true
  })
  _count?: TicketingCount | null;
}
