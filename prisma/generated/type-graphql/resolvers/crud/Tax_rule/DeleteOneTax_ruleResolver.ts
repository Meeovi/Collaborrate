import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTax_ruleArgs } from "./args/DeleteOneTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class DeleteOneTax_ruleResolver {
  @TypeGraphQL.Mutation(_returns => Tax_rule, {
    nullable: true
  })
  async deleteOneTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
