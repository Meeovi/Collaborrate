import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyCustomersInputEnvelope } from "../inputs/Credit_memosCreateManyCustomersInputEnvelope";
import { Credit_memosCreateOrConnectWithoutCustomersInput } from "../inputs/Credit_memosCreateOrConnectWithoutCustomersInput";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class Credit_memosCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [Credit_memosCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Credit_memosCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Credit_memosCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Credit_memosCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  connect?: Credit_memosWhereUniqueInput[] | undefined;
}
