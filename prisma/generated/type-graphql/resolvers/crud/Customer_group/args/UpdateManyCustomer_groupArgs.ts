import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupUpdateManyMutationInput } from "../../../inputs/Customer_groupUpdateManyMutationInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_groupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;
}
