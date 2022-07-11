import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesUpdateInput } from "../../../inputs/ArticlesUpdateInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesUpdateInput, {
    nullable: false
  })
  data!: ArticlesUpdateInput;

  @TypeGraphQL.Field(_type => ArticlesWhereUniqueInput, {
    nullable: false
  })
  where!: ArticlesWhereUniqueInput;
}
