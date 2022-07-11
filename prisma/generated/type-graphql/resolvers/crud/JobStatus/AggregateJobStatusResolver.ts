import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJobStatusArgs } from "./args/AggregateJobStatusArgs";
import { JobStatus } from "../../../models/JobStatus";
import { AggregateJobStatus } from "../../outputs/AggregateJobStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobStatus)
export class AggregateJobStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateJobStatus, {
    nullable: false
  })
  async aggregateJobStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobStatusArgs): Promise<AggregateJobStatus> {
    return getPrismaFromContext(ctx).jobStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
