import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: false
  })
  where!: AgreementsWhereUniqueInput;
}
