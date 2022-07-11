import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesCreateInput } from "../../../inputs/ArticlesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesCreateInput, {
    nullable: false
  })
  data!: ArticlesCreateInput;
}
