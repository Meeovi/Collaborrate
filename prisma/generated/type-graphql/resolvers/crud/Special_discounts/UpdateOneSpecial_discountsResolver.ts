import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSpecial_discountsArgs } from "./args/UpdateOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Special_discounts)
export class UpdateOneSpecial_discountsResolver {
  @TypeGraphQL.Mutation(_returns => Special_discounts, {
    nullable: true
  })
  async updateOneSpecial_discounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSpecial_discountsArgs): Promise<Special_discounts | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).special_discounts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
