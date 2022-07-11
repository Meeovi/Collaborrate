import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomer_groupArgs } from "./args/FindFirstCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_group)
export class FindFirstCustomer_groupResolver {
  @TypeGraphQL.Query(_returns => Customer_group, {
    nullable: true
  })
  async findFirstCustomer_group(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomer_groupArgs): Promise<Customer_group | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_group.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
