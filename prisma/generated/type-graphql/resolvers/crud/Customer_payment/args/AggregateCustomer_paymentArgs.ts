import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_paymentOrderByWithRelationAndSearchRelevanceInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  where?: Customer_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_paymentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_paymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
