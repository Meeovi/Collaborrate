import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TrainingsCreateManyCountriesInput", {
  isAbstract: true
})
export class TrainingsCreateManyCountriesInput {
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
  subject?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  steps?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  competency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  course?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grade?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  state?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  student?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  anncouncement?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  badges?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isCompleted?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speakers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldTrips?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignmentsDueDate?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origanlityReport?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  faqs?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  languages?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  checklists?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meetups?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  digiboards?: string | undefined;
}
