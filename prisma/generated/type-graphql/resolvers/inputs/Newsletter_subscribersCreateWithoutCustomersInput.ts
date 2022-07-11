import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Newsletter_subscribersCreateWithoutCustomersInput", {
  isAbstract: true
})
export class Newsletter_subscribersCreateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_first_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;
}
