import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesCreateInput } from "../../../inputs/CategoriesCreateInput";
import { CategoriesUpdateInput } from "../../../inputs/CategoriesUpdateInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesCreateInput, {
    nullable: false
  })
  create!: CategoriesCreateInput;

  @TypeGraphQL.Field(_type => CategoriesUpdateInput, {
    nullable: false
  })
  update!: CategoriesUpdateInput;
}
