import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("JobScheduleUpdaterpermInput", {
  isAbstract: true
})
export class JobScheduleUpdaterpermInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  set?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  push?: string[] | undefined;
}
