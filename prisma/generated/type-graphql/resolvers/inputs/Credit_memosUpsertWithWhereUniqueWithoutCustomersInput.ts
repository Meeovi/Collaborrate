import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosUpdateWithoutCustomersInput } from "../inputs/Credit_memosUpdateWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class Credit_memosUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: Credit_memosUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => Credit_memosCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Credit_memosCreateWithoutCustomersInput;
}
