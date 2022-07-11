import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneContent_typeArgs } from "./args/CreateOneContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content_type)
export class CreateOneContent_typeResolver {
  @TypeGraphQL.Mutation(_returns => Content_type, {
    nullable: false
  })
  async createOneContent_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneContent_typeArgs): Promise<Content_type> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).content_type.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
