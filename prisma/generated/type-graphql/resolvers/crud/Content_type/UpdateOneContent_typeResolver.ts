import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneContent_typeArgs } from "./args/UpdateOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content_type)
export class UpdateOneContent_typeResolver {
  @TypeGraphQL.Mutation(_returns => Content_type, {
    nullable: true
  })
  async updateOneContent_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneContent_typeArgs): Promise<Content_type | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).content_type.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
