import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesUpdateManyMutationInput } from "../../../inputs/ArticlesUpdateManyMutationInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArticlesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArticlesWhereInput, {
    nullable: true
  })
  where?: ArticlesWhereInput | undefined;
}
