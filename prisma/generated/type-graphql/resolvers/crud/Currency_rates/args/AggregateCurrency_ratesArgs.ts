import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Currency_ratesOrderByWithRelationAndSearchRelevanceInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereInput, {
    nullable: true
  })
  where?: Currency_ratesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Currency_ratesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_ratesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
