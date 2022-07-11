import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateManyProductsInputEnvelope } from "../inputs/RatingCreateManyProductsInputEnvelope";
import { RatingCreateOrConnectWithoutProductsInput } from "../inputs/RatingCreateOrConnectWithoutProductsInput";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingScalarWhereInput } from "../inputs/RatingScalarWhereInput";
import { RatingUpdateManyWithWhereWithoutProductsInput } from "../inputs/RatingUpdateManyWithWhereWithoutProductsInput";
import { RatingUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/RatingUpdateWithWhereUniqueWithoutProductsInput";
import { RatingUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/RatingUpsertWithWhereUniqueWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType("RatingUpdateManyWithoutProductsNestedInput", {
  isAbstract: true
})
export class RatingUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutProductsInput], {
    nullable: true
  })
  create?: RatingCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: RatingUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => RatingCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: RatingCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  set?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  delete?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  connect?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: RatingUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: RatingUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RatingScalarWhereInput[] | undefined;
}
