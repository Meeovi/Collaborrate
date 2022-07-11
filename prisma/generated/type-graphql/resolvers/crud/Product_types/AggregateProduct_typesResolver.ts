import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProduct_typesArgs } from "./args/AggregateProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
import { AggregateProduct_types } from "../../outputs/AggregateProduct_types";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_types)
export class AggregateProduct_typesResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct_types, {
    nullable: false
  })
  async aggregateProduct_types(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProduct_typesArgs): Promise<AggregateProduct_types> {
    return getPrismaFromContext(ctx).product_types.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
