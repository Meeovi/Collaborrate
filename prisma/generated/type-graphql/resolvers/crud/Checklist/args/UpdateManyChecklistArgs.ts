import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistUpdateManyMutationInput } from "../../../inputs/ChecklistUpdateManyMutationInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChecklistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  where?: ChecklistWhereInput | undefined;
}
