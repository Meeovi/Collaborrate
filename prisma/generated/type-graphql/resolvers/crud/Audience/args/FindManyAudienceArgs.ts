import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AudienceOrderByWithRelationAndSearchRelevanceInput";
import { AudienceWhereInput } from "../../../inputs/AudienceWhereInput";
import { AudienceWhereUniqueInput } from "../../../inputs/AudienceWhereUniqueInput";
import { AudienceScalarFieldEnum } from "../../../../enums/AudienceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereInput, {
    nullable: true
  })
  where?: AudienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AudienceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AudienceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => AudienceWhereUniqueInput, {
    nullable: true
  })
  cursor?: AudienceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AudienceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "createdAt" | "updatedAt" | "name" | "query" | "lastUsed" | "timesUsed" | "rperm" | "wperm"> | undefined;
}
