import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleOrderByWithRelationInput } from "../../../inputs/Tax_ruleOrderByWithRelationInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";
import { Tax_ruleScalarFieldEnum } from "../../../../enums/Tax_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  where?: Tax_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Tax_ruleOrderByWithRelationInput[] | undefined;

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
