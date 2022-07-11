import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("JobStatus", {
  isAbstract: true
})
export class JobStatus {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  params?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finishedAt?: Date | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  rperm!: string[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  wperm!: string[];
}
