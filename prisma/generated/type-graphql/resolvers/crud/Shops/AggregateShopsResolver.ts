import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShopsArgs } from "./args/AggregateShopsArgs";
import { Shops } from "../../../models/Shops";
import { AggregateShops } from "../../outputs/AggregateShops";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shops)
export class AggregateShopsResolver {
  @TypeGraphQL.Query(_returns => AggregateShops, {
    nullable: false
  })
  async aggregateShops(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShopsArgs): Promise<AggregateShops> {
    return getPrismaFromContext(ctx).shops.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
