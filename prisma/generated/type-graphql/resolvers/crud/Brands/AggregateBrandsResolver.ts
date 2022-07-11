import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBrandsArgs } from "./args/AggregateBrandsArgs";
import { Brands } from "../../../models/Brands";
import { AggregateBrands } from "../../outputs/AggregateBrands";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Brands)
export class AggregateBrandsResolver {
  @TypeGraphQL.Query(_returns => AggregateBrands, {
    nullable: false
  })
  async aggregateBrands(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBrandsArgs): Promise<AggregateBrands> {
    return getPrismaFromContext(ctx).brands.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
