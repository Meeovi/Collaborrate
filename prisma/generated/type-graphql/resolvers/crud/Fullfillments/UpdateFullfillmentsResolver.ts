import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateFullfillmentsArgs } from "./args/UpdateFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fullfillments)
export class UpdateFullfillmentsResolver {
  @TypeGraphQL.Mutation(_returns => Fullfillments, {
    nullable: true
  })
  async updateFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFullfillmentsArgs): Promise<Fullfillments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
