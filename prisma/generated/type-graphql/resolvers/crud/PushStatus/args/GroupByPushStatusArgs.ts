import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusOrderByWithAggregationInput } from "../../../inputs/PushStatusOrderByWithAggregationInput";
import { PushStatusScalarWhereWithAggregatesInput } from "../../../inputs/PushStatusScalarWhereWithAggregatesInput";
import { PushStatusWhereInput } from "../../../inputs/PushStatusWhereInput";
import { PushStatusScalarFieldEnum } from "../../../../enums/PushStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereInput, {
    nullable: true
  })
  where?: PushStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PushStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PushStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PushStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "pushTime" | "source" | "query" | "payload" | "title" | "expiry" | "expiration_interval" | "status" | "numSent" | "numFailed" | "pushHash" | "errorMessage" | "sentPerType" | "failedPerType" | "sentPerUTCOffset" | "failedPerUTCOffset" | "count" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => PushStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PushStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
