import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput";
import { Cart_price_rulesWhereInput } from "../../../inputs/Cart_price_rulesWhereInput";
import { Cart_price_rulesWhereUniqueInput } from "../../../inputs/Cart_price_rulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesWhereInput, {
    nullable: true
  })
  where?: Cart_price_rulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cart_price_rulesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
