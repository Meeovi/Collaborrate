import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyCustomersInput } from "../inputs/CommentsCreateManyCustomersInput";

@TypeGraphQL.InputType("CommentsCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class CommentsCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentsCreateManyCustomersInput], {
    nullable: false
  })
  data!: CommentsCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
