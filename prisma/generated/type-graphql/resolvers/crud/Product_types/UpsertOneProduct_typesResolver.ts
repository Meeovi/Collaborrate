import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProduct_typesArgs } from "./args/UpsertOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_types)
export class UpsertOneProduct_typesResolver {
  @TypeGraphQL.Mutation(_returns => Product_types, {
    nullable: false
  })
  async upsertOneProduct_types(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProduct_typesArgs): Promise<Product_types> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_types.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
