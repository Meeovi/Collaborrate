import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobStatusCreaterpermInput } from "../inputs/JobStatusCreaterpermInput";
import { JobStatusCreatewpermInput } from "../inputs/JobStatusCreatewpermInput";

@TypeGraphQL.InputType("JobStatusCreateInput", {
  isAbstract: true
})
export class JobStatusCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  params?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finishedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => JobStatusCreaterpermInput, {
    nullable: true
  })
  rperm?: JobStatusCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => JobStatusCreatewpermInput, {
    nullable: true
  })
  wperm?: JobStatusCreatewpermInput | undefined;
}
