import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateOrderByWithRelationInput } from "../../../inputs/Tax_rateOrderByWithRelationInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";
import { Tax_rateScalarFieldEnum } from "../../../../enums/Tax_rateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  where?: Tax_rateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Tax_rateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_rateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tax_identifier" | "zip_post_is_range" | "postcode" | "state" | "country" | "rate_percent" | "default_store_view" | "prod_id"> | undefined;
}
