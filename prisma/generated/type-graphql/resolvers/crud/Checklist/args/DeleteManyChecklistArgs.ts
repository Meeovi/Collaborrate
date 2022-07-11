import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  where?: ChecklistWhereInput | undefined;
}
