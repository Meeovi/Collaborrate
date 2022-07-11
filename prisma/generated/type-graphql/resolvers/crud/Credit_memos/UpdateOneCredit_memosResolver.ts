import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCredit_memosArgs } from "./args/UpdateOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit_memos)
export class UpdateOneCredit_memosResolver {
  @TypeGraphQL.Mutation(_returns => Credit_memos, {
    nullable: true
  })
  async updateOneCredit_memos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCredit_memosArgs): Promise<Credit_memos | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).credit_memos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
