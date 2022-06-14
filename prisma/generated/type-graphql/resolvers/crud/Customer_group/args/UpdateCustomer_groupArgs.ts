import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupUpdateInput } from "../../../inputs/Customer_groupUpdateInput";
import { Customer_groupWhereUniqueInput } from "../../../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupUpdateInput, {
    nullable: false
  })
  data!: Customer_groupUpdateInput;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;
}
