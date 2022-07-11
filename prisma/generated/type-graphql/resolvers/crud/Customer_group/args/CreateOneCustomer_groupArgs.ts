import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupCreateInput } from "../../../inputs/Customer_groupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupCreateInput, {
    nullable: false
  })
  data!: Customer_groupCreateInput;
}
