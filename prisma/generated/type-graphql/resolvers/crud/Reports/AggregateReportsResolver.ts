import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReportsArgs } from "./args/AggregateReportsArgs";
import { Reports } from "../../../models/Reports";
import { AggregateReports } from "../../outputs/AggregateReports";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reports)
export class AggregateReportsResolver {
  @TypeGraphQL.Query(_returns => AggregateReports, {
    nullable: false
  })
  async aggregateReports(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReportsArgs): Promise<AggregateReports> {
    return getPrismaFromContext(ctx).reports.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
