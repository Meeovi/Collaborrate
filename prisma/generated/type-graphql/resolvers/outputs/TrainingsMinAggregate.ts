import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TrainingsMinAggregate", {
  isAbstract: true
})
export class TrainingsMinAggregate {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  steps!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  competency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  course!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grade!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  country!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  state!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  student!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  anncouncement!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  badges!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isCompleted!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speakers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fieldTrips!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignments!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignmentsDueDate!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origanlityReport!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  faqs!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  languages!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  checklists!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meetups!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lab!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  digiboards!: string | null;
}
