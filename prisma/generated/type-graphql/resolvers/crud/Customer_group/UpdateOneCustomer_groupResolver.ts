import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomer_groupArgs } from "./args/UpdateOneCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_group)
export class UpdateOneCustomer_groupResolver {
  @TypeGraphQL.Mutation(_returns => Customer_group, {
    nullable: true
  })
  async updateOneCustomer_group(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCustomer_groupArgs): Promise<Customer_group | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_group.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
