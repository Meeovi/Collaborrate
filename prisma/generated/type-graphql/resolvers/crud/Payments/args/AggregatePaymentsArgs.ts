import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsOrderByWithRelationInput } from "../../../inputs/PaymentsOrderByWithRelationInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereInput, {
    nullable: true
  })
  where?: PaymentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PaymentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PaymentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
