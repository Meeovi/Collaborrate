import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsCreateInput } from "../../../inputs/AgreementsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsCreateInput, {
    nullable: false
  })
  data!: AgreementsCreateInput;
}
