import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesCreateInput } from "../../../inputs/ArticlesCreateInput";
import { ArticlesUpdateInput } from "../../../inputs/ArticlesUpdateInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesWhereUniqueInput, {
    nullable: false
  })
  where!: ArticlesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticlesCreateInput, {
    nullable: false
  })
  create!: ArticlesCreateInput;

  @TypeGraphQL.Field(_type => ArticlesUpdateInput, {
    nullable: false
  })
  update!: ArticlesUpdateInput;
}
