import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateManyProductsInputEnvelope } from "../inputs/RatingCreateManyProductsInputEnvelope";
import { RatingCreateOrConnectWithoutProductsInput } from "../inputs/RatingCreateOrConnectWithoutProductsInput";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType("RatingCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class RatingCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutProductsInput], {
    nullable: true
  })
  create?: RatingCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => RatingCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: RatingCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  connect?: RatingWhereUniqueInput[] | undefined;
}
