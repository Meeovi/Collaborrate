import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosUpdateWithoutProductsInput } from "../inputs/Credit_memosUpdateWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Credit_memosUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: Credit_memosUpdateWithoutProductsInput;
}
