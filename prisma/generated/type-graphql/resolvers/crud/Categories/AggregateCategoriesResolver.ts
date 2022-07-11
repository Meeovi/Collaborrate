import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesArgs } from "./args/AggregateCategoriesArgs";
import { Categories } from "../../../models/Categories";
import { AggregateCategories } from "../../outputs/AggregateCategories";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Categories)
export class AggregateCategoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateCategories, {
    nullable: false
  })
  async aggregateCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoriesArgs): Promise<AggregateCategories> {
    return getPrismaFromContext(ctx).categories.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
