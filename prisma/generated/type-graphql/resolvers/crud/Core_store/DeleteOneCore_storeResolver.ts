import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCore_storeArgs } from "./args/DeleteOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Core_store)
export class DeleteOneCore_storeResolver {
  @TypeGraphQL.Mutation(_returns => Core_store, {
    nullable: true
  })
  async deleteOneCore_store(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCore_storeArgs): Promise<Core_store | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).core_store.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
