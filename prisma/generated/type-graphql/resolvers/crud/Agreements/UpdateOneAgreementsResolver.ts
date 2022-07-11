import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAgreementsArgs } from "./args/UpdateOneAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Agreements)
export class UpdateOneAgreementsResolver {
  @TypeGraphQL.Mutation(_returns => Agreements, {
    nullable: true
  })
  async updateOneAgreements(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAgreementsArgs): Promise<Agreements | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).agreements.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
