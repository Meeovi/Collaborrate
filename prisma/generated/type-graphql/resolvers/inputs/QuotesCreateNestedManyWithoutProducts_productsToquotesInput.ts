import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyProducts_productsToquotesInputEnvelope } from "../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateNestedManyWithoutProducts_productsToquotesInput", {
  isAbstract: true
})
export class QuotesCreateNestedManyWithoutProducts_productsToquotesInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyProducts_productsToquotesInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyProducts_productsToquotesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  connect?: QuotesWhereUniqueInput[] | undefined;
}
