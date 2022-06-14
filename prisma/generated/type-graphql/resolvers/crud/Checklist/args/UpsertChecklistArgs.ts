import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistCreateInput } from "../../../inputs/ChecklistCreateInput";
import { ChecklistUpdateInput } from "../../../inputs/ChecklistUpdateInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: false
  })
  where!: ChecklistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChecklistCreateInput, {
    nullable: false
  })
  create!: ChecklistCreateInput;

  @TypeGraphQL.Field(_type => ChecklistUpdateInput, {
    nullable: false
  })
  update!: ChecklistUpdateInput;
}
