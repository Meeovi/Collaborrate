import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OpportunitiesOrderByWithRelationAndSearchRelevanceInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";
import { OpportunitiesScalarFieldEnum } from "../../../../enums/OpportunitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereInput, {
    nullable: true
  })
  where?: OpportunitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OpportunitiesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: OpportunitiesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: OpportunitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OpportunitiesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date"> | undefined;
}
