import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCredit_memosArgs } from "./args/AggregateCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
import { AggregateCredit_memos } from "../../outputs/AggregateCredit_memos";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit_memos)
export class AggregateCredit_memosResolver {
  @TypeGraphQL.Query(_returns => AggregateCredit_memos, {
    nullable: false
  })
  async aggregateCredit_memos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCredit_memosArgs): Promise<AggregateCredit_memos> {
    return getPrismaFromContext(ctx).credit_memos.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
