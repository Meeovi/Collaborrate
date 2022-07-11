import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyCustomersInput } from "../inputs/ProjectsCreateManyCustomersInput";

@TypeGraphQL.InputType("ProjectsCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class ProjectsCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsCreateManyCustomersInput], {
    nullable: false
  })
  data!: ProjectsCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
