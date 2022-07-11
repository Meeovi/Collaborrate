import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWebhooksArgs } from "./args/UpsertOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Webhooks)
export class UpsertOneWebhooksResolver {
  @TypeGraphQL.Mutation(_returns => Webhooks, {
    nullable: false
  })
  async upsertOneWebhooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWebhooksArgs): Promise<Webhooks> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).webhooks.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
