import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneMediamanagerArgs } from "./args/CreateOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class CreateOneMediamanagerResolver {
  @TypeGraphQL.Mutation(_returns => Mediamanager, {
    nullable: false
  })
  async createOneMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMediamanagerArgs): Promise<Mediamanager> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mediamanager.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
