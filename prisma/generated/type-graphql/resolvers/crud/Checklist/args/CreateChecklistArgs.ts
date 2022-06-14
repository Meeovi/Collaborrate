import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistCreateInput } from "../../../inputs/ChecklistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistCreateInput, {
    nullable: false
  })
  data!: ChecklistCreateInput;
}
