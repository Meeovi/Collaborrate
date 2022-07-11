import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsUpdateInput } from "../../../inputs/AgreementsUpdateInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsUpdateInput, {
    nullable: false
  })
  data!: AgreementsUpdateInput;

  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: false
  })
  where!: AgreementsWhereUniqueInput;
}
