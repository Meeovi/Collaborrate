import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupOrderByWithRelationInput } from "../../../inputs/Customer_groupOrderByWithRelationInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";
import { Customer_groupWhereUniqueInput } from "../../../inputs/Customer_groupWhereUniqueInput";
import { Customer_groupScalarFieldEnum } from "../../../../enums/Customer_groupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CustomersCustomer_group_customer_groupTocustomersArgs {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Customer_groupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_groupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "tax_class" | "cust_id"> | undefined;
}
