import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByWebsitesArgs } from "./args/GroupByWebsitesArgs";
import { Websites } from "../../../models/Websites";
import { WebsitesGroupBy } from "../../outputs/WebsitesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Websites)
export class GroupByWebsitesResolver {
  @TypeGraphQL.Query(_returns => [WebsitesGroupBy], {
    nullable: false
  })
  async groupByWebsites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWebsitesArgs): Promise<WebsitesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).websites.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
