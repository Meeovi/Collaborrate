import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryOrderByWithAggregationInput } from "../../../inputs/Tax_categoryOrderByWithAggregationInput";
import { Tax_categoryScalarWhereWithAggregatesInput } from "../../../inputs/Tax_categoryScalarWhereWithAggregatesInput";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";
import { Tax_categoryScalarFieldEnum } from "../../../../enums/Tax_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryWhereInput, {
    nullable: true
  })
  where?: Tax_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_categoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "default">;

  @TypeGraphQL.Field(_type => Tax_categoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_categoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
