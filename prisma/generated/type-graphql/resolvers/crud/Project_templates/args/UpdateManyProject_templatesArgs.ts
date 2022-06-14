import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesUpdateManyMutationInput } from "../../../inputs/Project_templatesUpdateManyMutationInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Project_templatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Project_templatesWhereInput, {
    nullable: true
  })
  where?: Project_templatesWhereInput | undefined;
}
