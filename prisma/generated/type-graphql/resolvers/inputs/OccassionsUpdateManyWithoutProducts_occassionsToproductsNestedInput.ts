import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyProducts_occassionsToproductsInputEnvelope } from "../inputs/OccassionsCreateManyProducts_occassionsToproductsInputEnvelope";
import { OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput";
import { OccassionsCreateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateWithoutProducts_occassionsToproductsInput";
import { OccassionsScalarWhereInput } from "../inputs/OccassionsScalarWhereInput";
import { OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput";
import { OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput";
import { OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput", {
  isAbstract: true
})
export class OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput {
  @TypeGraphQL.Field(_type => [OccassionsCreateWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  create?: OccassionsCreateWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  connectOrCreate?: OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  upsert?: OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateManyProducts_occassionsToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: OccassionsCreateManyProducts_occassionsToproductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  set?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  delete?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  connect?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  update?: OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  updateMany?: OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OccassionsScalarWhereInput[] | undefined;
}
