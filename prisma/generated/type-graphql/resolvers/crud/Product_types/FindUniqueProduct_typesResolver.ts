import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_typesArgs } from "./args/FindUniqueProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_types)
export class FindUniqueProduct_typesResolver {
  @TypeGraphQL.Query(_returns => Product_types, {
    nullable: true
  })
  async findUniqueProduct_types(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProduct_typesArgs): Promise<Product_types | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_types.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
