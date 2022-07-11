import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsCreateInput } from "../../../inputs/PaymentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsCreateInput, {
    nullable: false
  })
  data!: PaymentsCreateInput;
}
