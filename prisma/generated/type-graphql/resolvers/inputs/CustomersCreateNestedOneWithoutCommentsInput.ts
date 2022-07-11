import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCommentsInput } from "../inputs/CustomersCreateOrConnectWithoutCommentsInput";
import { CustomersCreateWithoutCommentsInput } from "../inputs/CustomersCreateWithoutCommentsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
