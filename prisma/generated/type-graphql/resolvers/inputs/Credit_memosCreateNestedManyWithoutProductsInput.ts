import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyProductsInputEnvelope } from "../inputs/Credit_memosCreateManyProductsInputEnvelope";
import { Credit_memosCreateOrConnectWithoutProductsInput } from "../inputs/Credit_memosCreateOrConnectWithoutProductsInput";
import { Credit_memosCreateWithoutProductsInput } from "../inputs/Credit_memosCreateWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Credit_memosCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Credit_memosCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Credit_memosCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Credit_memosCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Credit_memosCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  connect?: Credit_memosWhereUniqueInput[] | undefined;
}
