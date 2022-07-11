import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyUsersInput } from "../inputs/ProjectsCreateManyUsersInput";

@TypeGraphQL.InputType("ProjectsCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class ProjectsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsCreateManyUsersInput], {
    nullable: false
  })
  data!: ProjectsCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
