import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneInternalizationArgs } from "./args/DeleteOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Internalization)
export class DeleteOneInternalizationResolver {
  @TypeGraphQL.Mutation(_returns => Internalization, {
    nullable: true
  })
  async deleteOneInternalization(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneInternalizationArgs): Promise<Internalization | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).internalization.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
