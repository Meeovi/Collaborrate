import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGift_certificatesArgs } from "./args/GroupByGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { Gift_certificatesGroupBy } from "../../outputs/Gift_certificatesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gift_certificates)
export class GroupByGift_certificatesResolver {
  @TypeGraphQL.Query(_returns => [Gift_certificatesGroupBy], {
    nullable: false
  })
  async groupByGift_certificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGift_certificatesArgs): Promise<Gift_certificatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).gift_certificates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
