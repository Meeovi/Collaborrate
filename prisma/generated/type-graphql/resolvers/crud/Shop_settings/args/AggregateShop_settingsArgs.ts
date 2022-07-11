import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shop_settingsOrderByWithRelationAndSearchRelevanceInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereInput, {
    nullable: true
  })
  where?: Shop_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shop_settingsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Shop_settingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shop_settingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
