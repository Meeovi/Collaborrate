import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateUrl_rewritesArgs } from "./args/UpdateUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class UpdateUrl_rewritesResolver {
  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: true
  })
  async updateUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
