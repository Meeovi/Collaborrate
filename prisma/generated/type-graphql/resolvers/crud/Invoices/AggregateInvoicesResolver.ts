import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInvoicesArgs } from "./args/AggregateInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
import { AggregateInvoices } from "../../outputs/AggregateInvoices";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invoices)
export class AggregateInvoicesResolver {
  @TypeGraphQL.Query(_returns => AggregateInvoices, {
    nullable: false
  })
  async aggregateInvoices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInvoicesArgs): Promise<AggregateInvoices> {
    return getPrismaFromContext(ctx).invoices.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
