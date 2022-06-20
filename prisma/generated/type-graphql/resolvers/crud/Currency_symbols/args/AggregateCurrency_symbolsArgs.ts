import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Currency_symbolsOrderByWithRelationAndSearchRelevanceInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereInput, {
    nullable: true
  })
  where?: Currency_symbolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Currency_symbolsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_symbolsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
