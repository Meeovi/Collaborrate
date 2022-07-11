import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomer_groupArgs } from "./args/AggregateCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
import { AggregateCustomer_group } from "../../outputs/AggregateCustomer_group";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_group)
export class AggregateCustomer_groupResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomer_group, {
    nullable: false
  })
  async aggregateCustomer_group(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomer_groupArgs): Promise<AggregateCustomer_group> {
    return getPrismaFromContext(ctx).customer_group.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
