import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUrl_rewritesArgs } from "./args/FindUniqueUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class FindUniqueUrl_rewritesResolver {
  @TypeGraphQL.Query(_returns => Url_rewrites, {
    nullable: true
  })
  async findUniqueUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUrl_rewritesArgs): Promise<Url_rewrites | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
