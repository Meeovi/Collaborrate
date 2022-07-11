import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsCreateInput } from "../../../inputs/PaymentsCreateInput";
import { PaymentsUpdateInput } from "../../../inputs/PaymentsUpdateInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PaymentsCreateInput, {
    nullable: false
  })
  create!: PaymentsCreateInput;

  @TypeGraphQL.Field(_type => PaymentsUpdateInput, {
    nullable: false
  })
  update!: PaymentsUpdateInput;
}
