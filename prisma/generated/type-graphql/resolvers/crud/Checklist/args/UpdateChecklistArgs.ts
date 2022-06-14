import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistUpdateInput } from "../../../inputs/ChecklistUpdateInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistUpdateInput, {
    nullable: false
  })
  data!: ChecklistUpdateInput;

  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: false
  })
  where!: ChecklistWhereUniqueInput;
}
