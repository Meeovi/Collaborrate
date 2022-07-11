import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesCreateInput } from "../../../inputs/CategoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesCreateInput, {
    nullable: false
  })
  data!: CategoriesCreateInput;
}
