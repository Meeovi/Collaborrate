import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTasksInput } from "../inputs/ProjectsCreateManyTasksInput";

@TypeGraphQL.InputType("ProjectsCreateManyTasksInputEnvelope", {
  isAbstract: true
})
export class ProjectsCreateManyTasksInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsCreateManyTasksInput], {
    nullable: false
  })
  data!: ProjectsCreateManyTasksInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
