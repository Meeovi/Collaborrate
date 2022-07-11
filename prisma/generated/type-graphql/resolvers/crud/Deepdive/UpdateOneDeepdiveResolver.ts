import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDeepdiveArgs } from "./args/UpdateOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Deepdive)
export class UpdateOneDeepdiveResolver {
  @TypeGraphQL.Mutation(_returns => Deepdive, {
    nullable: true
  })
  async updateOneDeepdive(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDeepdiveArgs): Promise<Deepdive | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deepdive.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
