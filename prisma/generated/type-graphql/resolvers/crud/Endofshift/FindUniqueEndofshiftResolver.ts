import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEndofshiftArgs } from "./args/FindUniqueEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Endofshift)
export class FindUniqueEndofshiftResolver {
  @TypeGraphQL.Query(_returns => Endofshift, {
    nullable: true
  })
  async endofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEndofshiftArgs): Promise<Endofshift | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
