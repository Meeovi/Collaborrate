import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesCreateManyInput } from "../../../inputs/ArticlesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArticlesArgs {
  @TypeGraphQL.Field(_type => [ArticlesCreateManyInput], {
    nullable: false
  })
  data!: ArticlesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
