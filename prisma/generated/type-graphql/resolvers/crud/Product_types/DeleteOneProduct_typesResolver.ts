import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProduct_typesArgs } from "./args/DeleteOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_types)
export class DeleteOneProduct_typesResolver {
  @TypeGraphQL.Mutation(_returns => Product_types, {
    nullable: true
  })
  async deleteOneProduct_types(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProduct_typesArgs): Promise<Product_types | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_types.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
