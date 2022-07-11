import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesOrderByWithAggregationInput } from "../../../inputs/Currency_ratesOrderByWithAggregationInput";
import { Currency_ratesScalarWhereWithAggregatesInput } from "../../../inputs/Currency_ratesScalarWhereWithAggregatesInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
import { Currency_ratesScalarFieldEnum } from "../../../../enums/Currency_ratesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereInput, {
    nullable: true
  })
  where?: Currency_ratesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Currency_ratesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"import_service" | "usd">;

  @TypeGraphQL.Field(_type => Currency_ratesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Currency_ratesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
