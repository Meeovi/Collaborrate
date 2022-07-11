import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CategoriesOrderByWithRelationAndSearchRelevanceInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  where?: CategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
