import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyProductsInputEnvelope } from "../inputs/Credit_memosCreateManyProductsInputEnvelope";
import { Credit_memosCreateOrConnectWithoutProductsInput } from "../inputs/Credit_memosCreateOrConnectWithoutProductsInput";
import { Credit_memosCreateWithoutProductsInput } from "../inputs/Credit_memosCreateWithoutProductsInput";
import { Credit_memosScalarWhereInput } from "../inputs/Credit_memosScalarWhereInput";
import { Credit_memosUpdateManyWithWhereWithoutProductsInput } from "../inputs/Credit_memosUpdateManyWithWhereWithoutProductsInput";
import { Credit_memosUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Credit_memosUpdateWithWhereUniqueWithoutProductsInput";
import { Credit_memosUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Credit_memosUpsertWithWhereUniqueWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosUpdateManyWithoutProductsNestedInput", {
  isAbstract: true
})
export class Credit_memosUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [Credit_memosCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Credit_memosCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Credit_memosCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Credit_memosUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Credit_memosCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  set?: Credit_memosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Credit_memosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  delete?: Credit_memosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput], {
    nullable: true
  })
  connect?: Credit_memosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Credit_memosUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Credit_memosUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Credit_memosScalarWhereInput[] | undefined;
}
