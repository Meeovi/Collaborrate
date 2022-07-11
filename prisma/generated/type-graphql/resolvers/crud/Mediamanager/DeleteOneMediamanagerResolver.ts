import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMediamanagerArgs } from "./args/DeleteOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class DeleteOneMediamanagerResolver {
  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: true
  })
  async deleteOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMediamanagerArgs): Promise<Mediamanager | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
