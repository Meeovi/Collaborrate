import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTax_categoryArgs } from "./args/UpsertOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_category)
export class UpsertOneTax_categoryResolver {
  @TypeGraphQL.Mutation(_returns => Tax_category, {
    nullable: false
  })
  async upsertOneTax_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTax_categoryArgs): Promise<Tax_category> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_category.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
