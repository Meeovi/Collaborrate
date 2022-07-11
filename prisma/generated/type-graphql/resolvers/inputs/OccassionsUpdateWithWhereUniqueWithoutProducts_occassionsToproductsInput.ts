import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsUpdateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpdateWithoutProducts_occassionsToproductsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsUpdateWithWhereUniqueWithoutProducts_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateWithoutProducts_occassionsToproductsInput, {
    nullable: false
  })
  data!: OccassionsUpdateWithoutProducts_occassionsToproductsInput;
}
