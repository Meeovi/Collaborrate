import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsUpdateManyMutationInput } from "../../../inputs/PaymentsUpdateManyMutationInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PaymentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PaymentsWhereInput, {
    nullable: true
  })
  where?: PaymentsWhereInput | undefined;
}
