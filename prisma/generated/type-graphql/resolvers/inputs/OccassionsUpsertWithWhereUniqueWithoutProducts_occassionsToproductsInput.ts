import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateWithoutProducts_occassionsToproductsInput";
import { OccassionsUpdateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpdateWithoutProducts_occassionsToproductsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsUpsertWithWhereUniqueWithoutProducts_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateWithoutProducts_occassionsToproductsInput, {
    nullable: false
  })
  update!: OccassionsUpdateWithoutProducts_occassionsToproductsInput;

  @TypeGraphQL.Field(_type => OccassionsCreateWithoutProducts_occassionsToproductsInput, {
    nullable: false
  })
  create!: OccassionsCreateWithoutProducts_occassionsToproductsInput;
}
