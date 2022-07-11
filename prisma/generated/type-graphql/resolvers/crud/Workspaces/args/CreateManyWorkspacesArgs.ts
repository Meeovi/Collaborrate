import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesCreateManyInput } from "../../../inputs/WorkspacesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkspacesArgs {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
