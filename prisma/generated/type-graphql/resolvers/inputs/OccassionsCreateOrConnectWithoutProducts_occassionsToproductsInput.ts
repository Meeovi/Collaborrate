import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateWithoutProducts_occassionsToproductsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsCreateOrConnectWithoutProducts_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsCreateWithoutProducts_occassionsToproductsInput, {
    nullable: false
  })
  create!: OccassionsCreateWithoutProducts_occassionsToproductsInput;
}
