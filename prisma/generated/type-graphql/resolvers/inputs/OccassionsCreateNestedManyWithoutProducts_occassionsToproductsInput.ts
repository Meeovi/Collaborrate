import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyProducts_occassionsToproductsInputEnvelope } from "../inputs/OccassionsCreateManyProducts_occassionsToproductsInputEnvelope";
import { OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput";
import { OccassionsCreateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateWithoutProducts_occassionsToproductsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => [OccassionsCreateWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  create?: OccassionsCreateWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput], {
    nullable: true
  })
  connectOrCreate?: OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateManyProducts_occassionsToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: OccassionsCreateManyProducts_occassionsToproductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  connect?: OccassionsWhereUniqueInput[] | undefined;
}
