import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTax_rateArgs } from "./args/DeleteOneTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rate)
export class DeleteOneTax_rateResolver {
  @TypeGraphQL.Mutation(_returns => Tax_rate, {
    nullable: true
  })
  async deleteOneTax_rate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTax_rateArgs): Promise<Tax_rate | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rate.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
