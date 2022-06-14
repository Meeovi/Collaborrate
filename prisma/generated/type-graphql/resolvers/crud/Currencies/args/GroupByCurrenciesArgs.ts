import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesOrderByWithAggregationInput } from "../../../inputs/CurrenciesOrderByWithAggregationInput";
import { CurrenciesScalarWhereWithAggregatesInput } from "../../../inputs/CurrenciesScalarWhereWithAggregatesInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
import { CurrenciesScalarFieldEnum } from "../../../../enums/CurrenciesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesWhereInput, {
    nullable: true
  })
  where?: CurrenciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CurrenciesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "region">;

  @TypeGraphQL.Field(_type => CurrenciesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CurrenciesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
