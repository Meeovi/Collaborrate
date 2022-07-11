import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySCHEMAArgs } from "./args/GroupBySCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { SCHEMAGroupBy } from "../../outputs/SCHEMAGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class GroupBySCHEMAResolver {
  @TypeGraphQL.Query(_returns => [SCHEMAGroupBy], {
    nullable: false
  })
  async groupBySCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySCHEMAArgs): Promise<SCHEMAGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
