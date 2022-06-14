import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesCreateManyInput } from "../../../inputs/Project_templatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProject_templatesArgs {
  @TypeGraphQL.Field(_type => [Project_templatesCreateManyInput], {
    nullable: false
  })
  data!: Project_templatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
