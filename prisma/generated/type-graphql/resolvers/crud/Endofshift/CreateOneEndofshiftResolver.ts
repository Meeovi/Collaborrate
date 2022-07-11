import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneEndofshiftArgs } from "./args/CreateOneEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Endofshift)
export class CreateOneEndofshiftResolver {
  @TypeGraphQL.Mutation(_returns => Endofshift, {
    nullable: false
  })
  async createOneEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEndofshiftArgs): Promise<Endofshift> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
