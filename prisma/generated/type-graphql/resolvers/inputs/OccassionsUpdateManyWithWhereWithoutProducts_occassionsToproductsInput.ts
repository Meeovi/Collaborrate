import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsScalarWhereInput } from "../inputs/OccassionsScalarWhereInput";
import { OccassionsUpdateManyMutationInput } from "../inputs/OccassionsUpdateManyMutationInput";

@TypeGraphQL.InputType("OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsUpdateManyWithWhereWithoutProducts_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => OccassionsScalarWhereInput, {
    nullable: false
  })
  where!: OccassionsScalarWhereInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: OccassionsUpdateManyMutationInput;
}
