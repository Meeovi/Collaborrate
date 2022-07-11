import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereInput, {
    nullable: true
  })
  where?: PaymentsWhereInput | undefined;
}
