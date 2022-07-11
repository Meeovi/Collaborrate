import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { credit_memosCredit_memoIdCompoundUniqueInput } from "../inputs/credit_memosCredit_memoIdCompoundUniqueInput";

@TypeGraphQL.InputType("Credit_memosWhereUniqueInput", {
  isAbstract: true
})
export class Credit_memosWhereUniqueInput {
  @TypeGraphQL.Field(_type => credit_memosCredit_memoIdCompoundUniqueInput, {
    nullable: true
  })
  credit_memo_id?: credit_memosCredit_memoIdCompoundUniqueInput | undefined;
}
