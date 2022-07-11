import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCommentsInput } from "../inputs/CustomersCreateWithoutCommentsInput";
import { CustomersUpdateWithoutCommentsInput } from "../inputs/CustomersUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCommentsInput;
}
