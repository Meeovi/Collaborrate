import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneMediamanagerArgs } from "./args/UpdateOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class UpdateOneMediamanagerResolver {
  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: true
  })
  async updateOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
