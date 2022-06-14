import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmCreateInput } from "../../../inputs/ImportmCreateInput";

@TypeGraphQL.ArgsType()
export class CreateImportmArgs {
  @TypeGraphQL.Field(_type => ImportmCreateInput, {
    nullable: false
  })
  data!: ImportmCreateInput;
}
