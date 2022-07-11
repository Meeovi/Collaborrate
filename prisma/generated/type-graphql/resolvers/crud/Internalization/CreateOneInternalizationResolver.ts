import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneInternalizationArgs } from "./args/CreateOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Internalization)
export class CreateOneInternalizationResolver {
  @TypeGraphQL.Mutation(_returns => Internalization, {
    nullable: false
  })
  async createOneInternalization(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneInternalizationArgs): Promise<Internalization> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).internalization.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
