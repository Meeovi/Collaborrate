import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmUpdateInput } from "../../../inputs/ImportmUpdateInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneImportmArgs {
  @TypeGraphQL.Field(_type => ImportmUpdateInput, {
    nullable: false
  })
  data!: ImportmUpdateInput;

  @TypeGraphQL.Field(_type => ImportmWhereUniqueInput, {
    nullable: false
  })
  where!: ImportmWhereUniqueInput;
}
