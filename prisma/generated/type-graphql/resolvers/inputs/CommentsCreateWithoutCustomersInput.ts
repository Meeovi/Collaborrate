import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateNestedManyWithoutCommentsInput } from "../inputs/MediamanagerCreateNestedManyWithoutCommentsInput";
import { TrainingsCreateNestedManyWithoutCommentsInput } from "../inputs/TrainingsCreateNestedManyWithoutCommentsInput";

@TypeGraphQL.InputType("CommentsCreateWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsCreateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customer_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published?: Date | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutCommentsInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateNestedManyWithoutCommentsInput, {
    nullable: true
  })
  trainings?: TrainingsCreateNestedManyWithoutCommentsInput | undefined;
}
