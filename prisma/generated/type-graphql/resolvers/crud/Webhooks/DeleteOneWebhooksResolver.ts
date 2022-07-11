import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWebhooksArgs } from "./args/DeleteOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Webhooks)
export class DeleteOneWebhooksResolver {
  @TypeGraphQL.Mutation(_returns => Webhooks, {
    nullable: true
  })
  async deleteOneWebhooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWebhooksArgs): Promise<Webhooks | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).webhooks.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
