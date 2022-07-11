import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsUpdateInput } from "../../../inputs/PaymentsUpdateInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsUpdateInput, {
    nullable: false
  })
  data!: PaymentsUpdateInput;

  @TypeGraphQL.Field(_type => PaymentsWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentsWhereUniqueInput;
}
