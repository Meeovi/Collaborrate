import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyImportmArgs {
  @TypeGraphQL.Field(_type => ImportmWhereInput, {
    nullable: true
  })
  where?: ImportmWhereInput | undefined;
}
