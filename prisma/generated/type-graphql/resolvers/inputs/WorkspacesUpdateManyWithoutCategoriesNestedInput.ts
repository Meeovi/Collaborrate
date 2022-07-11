import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCategoriesInputEnvelope } from "../inputs/WorkspacesCreateManyCategoriesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutCategoriesInput } from "../inputs/WorkspacesCreateOrConnectWithoutCategoriesInput";
import { WorkspacesCreateWithoutCategoriesInput } from "../inputs/WorkspacesCreateWithoutCategoriesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutCategoriesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutCategoriesNestedInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyCategoriesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyCategoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  set?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  delete?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
