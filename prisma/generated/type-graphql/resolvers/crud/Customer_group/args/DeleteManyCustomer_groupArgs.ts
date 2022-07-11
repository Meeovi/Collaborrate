import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;
}
