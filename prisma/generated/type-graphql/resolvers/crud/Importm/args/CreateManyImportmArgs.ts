import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmCreateManyInput } from "../../../inputs/ImportmCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyImportmArgs {
  @TypeGraphQL.Field(_type => [ImportmCreateManyInput], {
    nullable: false
  })
  data!: ImportmCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
