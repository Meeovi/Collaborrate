import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstContent_typeArgs } from "./args/FindFirstContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content_type)
export class FindFirstContent_typeResolver {
  @TypeGraphQL.Query(_returns => Content_type, {
    nullable: true
  })
  async findFirstContent_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContent_typeArgs): Promise<Content_type | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).content_type.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
