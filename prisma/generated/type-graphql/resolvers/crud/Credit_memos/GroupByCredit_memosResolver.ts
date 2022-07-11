import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCredit_memosArgs } from "./args/GroupByCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
import { Credit_memosGroupBy } from "../../outputs/Credit_memosGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit_memos)
export class GroupByCredit_memosResolver {
  @TypeGraphQL.Query(_returns => [Credit_memosGroupBy], {
    nullable: false
  })
  async groupByCredit_memos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCredit_memosArgs): Promise<Credit_memosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).credit_memos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
