import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupCreateManyInput } from "../../../inputs/Customer_groupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_groupArgs {
  @TypeGraphQL.Field(_type => [Customer_groupCreateManyInput], {
    nullable: false
  })
  data!: Customer_groupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
