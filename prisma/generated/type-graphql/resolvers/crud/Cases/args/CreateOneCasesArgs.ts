import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesCreateInput } from "../../../inputs/CasesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCasesArgs {
  @TypeGraphQL.Field(_type => CasesCreateInput, {
    nullable: false
  })
  data!: CasesCreateInput;
}
