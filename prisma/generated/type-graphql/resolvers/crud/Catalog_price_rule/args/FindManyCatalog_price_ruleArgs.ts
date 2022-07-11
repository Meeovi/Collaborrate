import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";
import { Catalog_price_ruleWhereUniqueInput } from "../../../inputs/Catalog_price_ruleWhereUniqueInput";
import { Catalog_price_ruleScalarFieldEnum } from "../../../../enums/Catalog_price_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput, {
    nullable: true
  })
  where?: Catalog_price_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Catalog_price_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Catalog_price_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "rule" | "description" | "active" | "customer_groups" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules"> | undefined;
}
