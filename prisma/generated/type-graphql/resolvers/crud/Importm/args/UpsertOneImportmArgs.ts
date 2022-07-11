import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmCreateInput } from "../../../inputs/ImportmCreateInput";
import { ImportmUpdateInput } from "../../../inputs/ImportmUpdateInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneImportmArgs {
  @TypeGraphQL.Field(_type => ImportmWhereUniqueInput, {
    nullable: false
  })
  where!: ImportmWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImportmCreateInput, {
    nullable: false
  })
  create!: ImportmCreateInput;

  @TypeGraphQL.Field(_type => ImportmUpdateInput, {
    nullable: false
  })
  update!: ImportmUpdateInput;
}
