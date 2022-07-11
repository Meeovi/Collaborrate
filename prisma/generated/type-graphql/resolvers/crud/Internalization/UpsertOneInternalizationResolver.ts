import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneInternalizationArgs } from "./args/UpsertOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Internalization)
export class UpsertOneInternalizationResolver {
  @TypeGraphQL.Mutation(_returns => Internalization, {
    nullable: false
  })
  async upsertOneInternalization(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneInternalizationArgs): Promise<Internalization> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).internalization.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
