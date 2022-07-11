import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/JobStatusOrderByWithRelationAndSearchRelevanceInput";
import { JobStatusWhereInput } from "../../../inputs/JobStatusWhereInput";
import { JobStatusWhereUniqueInput } from "../../../inputs/JobStatusWhereUniqueInput";
import { JobStatusScalarFieldEnum } from "../../../../enums/JobStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusWhereInput, {
    nullable: true
  })
  where?: JobStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobStatusOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: JobStatusOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => JobStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JobStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "createdAt" | "updatedAt" | "jobName" | "source" | "status" | "message" | "params" | "finishedAt" | "rperm" | "wperm"> | undefined;
}
