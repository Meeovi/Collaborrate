import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class Credit_memosCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Credit_memosCreateWithoutCustomersInput;
}
