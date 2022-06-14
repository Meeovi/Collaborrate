import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsCreateManyInput } from "../../../inputs/PaymentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPaymentsArgs {
  @TypeGraphQL.Field(_type => [PaymentsCreateManyInput], {
    nullable: false
  })
  data!: PaymentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
