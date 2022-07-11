import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupCreateInput } from "../../../inputs/Customer_groupCreateInput";
import { Customer_groupUpdateInput } from "../../../inputs/Customer_groupUpdateInput";
import { Customer_groupWhereUniqueInput } from "../../../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateInput, {
    nullable: false
  })
  create!: Customer_groupCreateInput;

  @TypeGraphQL.Field(_type => Customer_groupUpdateInput, {
    nullable: false
  })
  update!: Customer_groupUpdateInput;
}
