import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesWhereUniqueInput, {
    nullable: false
  })
  where!: ArticlesWhereUniqueInput;
}
