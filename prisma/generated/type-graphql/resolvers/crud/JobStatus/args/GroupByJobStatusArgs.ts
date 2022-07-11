import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusOrderByWithAggregationInput } from "../../../inputs/JobStatusOrderByWithAggregationInput";
import { JobStatusScalarWhereWithAggregatesInput } from "../../../inputs/JobStatusScalarWhereWithAggregatesInput";
import { JobStatusWhereInput } from "../../../inputs/JobStatusWhereInput";
import { JobStatusScalarFieldEnum } from "../../../../enums/JobStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusWhereInput, {
    nullable: true
  })
  where?: JobStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: JobStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "jobName" | "source" | "status" | "message" | "params" | "finishedAt" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => JobStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JobStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
