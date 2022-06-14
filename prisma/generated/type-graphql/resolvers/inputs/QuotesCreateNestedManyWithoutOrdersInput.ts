import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyOrdersInputEnvelope } from "../inputs/QuotesCreateManyOrdersInputEnvelope";
import { QuotesCreateOrConnectWithoutOrdersInput } from "../inputs/QuotesCreateOrConnectWithoutOrdersInput";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateNestedManyWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesCreateNestedManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyOrdersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  connect?: QuotesWhereUniqueInput[] | undefined;
}
