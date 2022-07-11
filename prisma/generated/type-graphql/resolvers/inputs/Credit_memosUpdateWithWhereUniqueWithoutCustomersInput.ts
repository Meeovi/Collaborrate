import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosUpdateWithoutCustomersInput } from "../inputs/Credit_memosUpdateWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class Credit_memosUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: Credit_memosUpdateWithoutCustomersInput;
}
