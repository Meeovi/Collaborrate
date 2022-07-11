import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneUrl_rewritesArgs } from "./args/CreateOneUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class CreateOneUrl_rewritesResolver {
  @TypeGraphQL.Mutation(_returns => Url_rewrites, {
    nullable: false
  })
  async createOneUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUrl_rewritesArgs): Promise<Url_rewrites> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
