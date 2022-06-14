import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsCreateInput } from "../../../inputs/AgreementsCreateInput";
import { AgreementsUpdateInput } from "../../../inputs/AgreementsUpdateInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: false
  })
  where!: AgreementsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AgreementsCreateInput, {
    nullable: false
  })
  create!: AgreementsCreateInput;

  @TypeGraphQL.Field(_type => AgreementsUpdateInput, {
    nullable: false
  })
  update!: AgreementsUpdateInput;
}
