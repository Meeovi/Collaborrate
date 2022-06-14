import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueImportmArgs {
  @TypeGraphQL.Field(_type => ImportmWhereUniqueInput, {
    nullable: false
  })
  where!: ImportmWhereUniqueInput;
}
