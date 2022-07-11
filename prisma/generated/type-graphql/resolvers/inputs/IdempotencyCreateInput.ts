import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IdempotencyCreaterpermInput } from "../inputs/IdempotencyCreaterpermInput";
import { IdempotencyCreatewpermInput } from "../inputs/IdempotencyCreatewpermInput";

@TypeGraphQL.InputType("IdempotencyCreateInput", {
  isAbstract: true
})
export class IdempotencyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reqId?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expire?: Date | undefined;

  @TypeGraphQL.Field(_type => IdempotencyCreaterpermInput, {
    nullable: true
  })
  rperm?: IdempotencyCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => IdempotencyCreatewpermInput, {
    nullable: true
  })
  wperm?: IdempotencyCreatewpermInput | undefined;
}
