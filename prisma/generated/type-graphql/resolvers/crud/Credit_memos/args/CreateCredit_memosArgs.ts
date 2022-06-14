import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosCreateInput } from "../../../inputs/Credit_memosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosCreateInput, {
    nullable: false
  })
  data!: Credit_memosCreateInput;
}
