import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCore_storeArgs } from "./args/AggregateCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
import { AggregateCore_store } from "../../outputs/AggregateCore_store";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Core_store)
export class AggregateCore_storeResolver {
  @TypeGraphQL.Query(_returns => AggregateCore_store, {
    nullable: false
  })
  async aggregateCore_store(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCore_storeArgs): Promise<AggregateCore_store> {
    return getPrismaFromContext(ctx).core_store.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
