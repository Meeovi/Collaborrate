import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAccountsArgs } from "./args/AggregateAccountsArgs";
import { Accounts } from "../../../models/Accounts";
import { AggregateAccounts } from "../../outputs/AggregateAccounts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Accounts)
export class AggregateAccountsResolver {
  @TypeGraphQL.Query(_returns => AggregateAccounts, {
    nullable: false
  })
  async aggregateAccounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAccountsArgs): Promise<AggregateAccounts> {
    return getPrismaFromContext(ctx).accounts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
