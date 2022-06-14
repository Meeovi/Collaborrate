import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesWhereInput, {
    nullable: true
  })
  where?: ArticlesWhereInput | undefined;
}
