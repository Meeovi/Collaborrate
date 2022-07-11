import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCredit_memosArgs } from "./args/CreateOneCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit_memos)
export class CreateOneCredit_memosResolver {
  @TypeGraphQL.Mutation(_returns => Credit_memos, {
    nullable: false
  })
  async createOneCredit_memos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCredit_memosArgs): Promise<Credit_memos> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).credit_memos.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
