import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateWithoutProductsInput } from "../inputs/Credit_memosCreateWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class Credit_memosCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosCreateWithoutProductsInput, {
    nullable: false
  })
  create!: Credit_memosCreateWithoutProductsInput;
}
