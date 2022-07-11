import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: false
  })
  where!: ChecklistWhereUniqueInput;
}
