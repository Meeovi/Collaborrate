import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyCustomersInputEnvelope } from "../inputs/CommentsCreateManyCustomersInputEnvelope";
import { CommentsCreateOrConnectWithoutCustomersInput } from "../inputs/CommentsCreateOrConnectWithoutCustomersInput";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/CommentsUpdateManyWithWhereWithoutCustomersInput";
import { CommentsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutCustomersInput";
import { CommentsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: CommentsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  set?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: CommentsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: CommentsUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsScalarWhereInput[] | undefined;
}
