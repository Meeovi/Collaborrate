import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyCustomers_customersToquotesInputEnvelope } from "../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput";
import { QuotesCreateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateNestedManyWithoutCustomers_customersToquotesInput", {
  isAbstract: true
})
export class QuotesCreateNestedManyWithoutCustomers_customersToquotesInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyCustomers_customersToquotesInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyCustomers_customersToquotesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  connect?: QuotesWhereUniqueInput[] | undefined;
}
