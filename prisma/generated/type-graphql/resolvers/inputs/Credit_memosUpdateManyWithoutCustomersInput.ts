import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyCustomersInputEnvelope } from "../inputs/Credit_memosCreateManyCustomersInputEnvelope";
import { Credit_memosCreateOrConnectWithoutCustomersInput } from "../inputs/Credit_memosCreateOrConnectWithoutCustomersInput";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosScalarWhereInput } from "../inputs/Credit_memosScalarWhereInput";
import { Credit_memosUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Credit_memosUpdateManyWithWhereWithoutCustomersInput";
import { Credit_memosUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Credit_memosUpdateWithWhereUniqueWithoutCustomersInput";
import { Credit_memosUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Credit_memosUpsertWithWhereUniqueWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.InputType("Credit_memosUpdateManyWithoutCustomersInput", {
  isAbstract: true
})
export class Credit_memosUpdateManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [Credit_memosCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Credit_memosCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Credit_memosCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: Credit_memosUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Credit_memosCreateManyCustomersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Credit_memosUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: Credit_memosUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: Credit_memosUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Credit_memosScalarWhereInput[] | undefined;
}
