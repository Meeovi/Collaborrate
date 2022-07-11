import * as TypeGraphQL from "type-graphql";
import { Credit_memos } from "../../../models/Credit_memos";
import { Customers } from "../../../models/Customers";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credit_memos)
export class Credit_memosRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() credit_memos: Credit_memos, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).credit_memos.findUnique({
      where: {
        credit_memo_id: {
          credit_memo: credit_memos.credit_memo,
          id: credit_memos.id,
        },
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() credit_memos: Credit_memos, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).credit_memos.findUnique({
      where: {
        credit_memo_id: {
          credit_memo: credit_memos.credit_memo,
          id: credit_memos.id,
        },
      },
    }).products({});
  }
}
