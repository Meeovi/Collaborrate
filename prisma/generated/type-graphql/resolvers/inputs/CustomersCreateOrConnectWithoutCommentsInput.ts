import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCommentsInput } from "../inputs/CustomersCreateWithoutCommentsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCommentsInput;
}
