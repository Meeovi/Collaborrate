import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateNestedOneWithoutNewsletter_subscribersInput";

@TypeGraphQL.InputType("Newsletter_subscribersCreateInput", {
  isAbstract: true
})
export class Newsletter_subscribersCreateInput {
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

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutNewsletter_subscribersInput | undefined;
}
