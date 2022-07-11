import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesUpdateInput } from "../../../inputs/CategoriesUpdateInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesUpdateInput, {
    nullable: false
  })
  data!: CategoriesUpdateInput;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesWhereUniqueInput;
}
