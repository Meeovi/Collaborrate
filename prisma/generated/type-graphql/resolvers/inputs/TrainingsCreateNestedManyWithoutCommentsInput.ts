import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCommentsInputEnvelope } from "../inputs/TrainingsCreateManyCommentsInputEnvelope";
import { TrainingsCreateOrConnectWithoutCommentsInput } from "../inputs/TrainingsCreateOrConnectWithoutCommentsInput";
import { TrainingsCreateWithoutCommentsInput } from "../inputs/TrainingsCreateWithoutCommentsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateNestedManyWithoutCommentsInput", {
  isAbstract: true
})
export class TrainingsCreateNestedManyWithoutCommentsInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutCommentsInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutCommentsInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyCommentsInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyCommentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;
}
