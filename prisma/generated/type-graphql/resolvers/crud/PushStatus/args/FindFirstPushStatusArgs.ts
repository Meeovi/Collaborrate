import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PushStatusOrderByWithRelationAndSearchRelevanceInput";
import { PushStatusWhereInput } from "../../../inputs/PushStatusWhereInput";
import { PushStatusWhereUniqueInput } from "../../../inputs/PushStatusWhereUniqueInput";
import { PushStatusScalarFieldEnum } from "../../../../enums/PushStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereInput, {
    nullable: true
  })
  where?: PushStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PushStatusOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PushStatusOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PushStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: PushStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PushStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "createdAt" | "updatedAt" | "pushTime" | "source" | "query" | "payload" | "title" | "expiry" | "expiration_interval" | "status" | "numSent" | "numFailed" | "pushHash" | "errorMessage" | "sentPerType" | "failedPerType" | "sentPerUTCOffset" | "failedPerUTCOffset" | "count" | "rperm" | "wperm"> | undefined;
}
