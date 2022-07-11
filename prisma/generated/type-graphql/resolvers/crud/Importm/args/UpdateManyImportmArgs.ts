import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmUpdateManyMutationInput } from "../../../inputs/ImportmUpdateManyMutationInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyImportmArgs {
  @TypeGraphQL.Field(_type => ImportmUpdateManyMutationInput, {
    nullable: false
  })
  data!: ImportmUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ImportmWhereInput, {
    nullable: true
  })
  where?: ImportmWhereInput | undefined;
}
