import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsOrderByWithAggregationInput } from "../../../inputs/Currency_symbolsOrderByWithAggregationInput";
import { Currency_symbolsScalarWhereWithAggregatesInput } from "../../../inputs/Currency_symbolsScalarWhereWithAggregatesInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";
import { Currency_symbolsScalarFieldEnum } from "../../../../enums/Currency_symbolsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereInput, {
    nullable: true
  })
  where?: Currency_symbolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Currency_symbolsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"symbol" | "use_standard">;

  @TypeGraphQL.Field(_type => Currency_symbolsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Currency_symbolsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
