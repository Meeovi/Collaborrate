import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";
import { Tax_ruleScalarFieldEnum } from "../../../../enums/Tax_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  where?: Tax_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "tax_rate" | "prod_id"> | undefined;
}
