import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateManyTicketingInput } from "../inputs/ProjectsCreateManyTicketingInput";

@TypeGraphQL.InputType("ProjectsCreateManyTicketingInputEnvelope", {
  isAbstract: true
})
export class ProjectsCreateManyTicketingInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsCreateManyTicketingInput], {
    nullable: false
  })
  data!: ProjectsCreateManyTicketingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
