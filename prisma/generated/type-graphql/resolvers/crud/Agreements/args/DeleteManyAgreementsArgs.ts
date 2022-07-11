import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  where?: AgreementsWhereInput | undefined;
}
