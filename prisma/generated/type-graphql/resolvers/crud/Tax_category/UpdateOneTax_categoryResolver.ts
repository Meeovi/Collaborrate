import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTax_categoryArgs } from "./args/UpdateOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_category)
export class UpdateOneTax_categoryResolver {
  @TypeGraphQL.Mutation(_returns => Tax_category, {
    nullable: true
  })
  async updateOneTax_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTax_categoryArgs): Promise<Tax_category | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_category.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
