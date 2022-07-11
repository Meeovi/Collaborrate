import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceOrderByWithAggregationInput } from "../../../inputs/AudienceOrderByWithAggregationInput";
import { AudienceScalarWhereWithAggregatesInput } from "../../../inputs/AudienceScalarWhereWithAggregatesInput";
import { AudienceWhereInput } from "../../../inputs/AudienceWhereInput";
import { AudienceScalarFieldEnum } from "../../../../enums/AudienceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereInput, {
    nullable: true
  })
  where?: AudienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AudienceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AudienceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudienceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "name" | "query" | "lastUsed" | "timesUsed" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => AudienceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AudienceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
