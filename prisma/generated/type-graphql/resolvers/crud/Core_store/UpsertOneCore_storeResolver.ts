import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCore_storeArgs } from "./args/UpsertOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Core_store)
export class UpsertOneCore_storeResolver {
  @TypeGraphQL.Mutation(_returns => Core_store, {
    nullable: false
  })
  async upsertOneCore_store(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCore_storeArgs): Promise<Core_store> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).core_store.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
