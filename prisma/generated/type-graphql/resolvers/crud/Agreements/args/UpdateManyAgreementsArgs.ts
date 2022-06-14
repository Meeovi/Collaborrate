import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsUpdateManyMutationInput } from "../../../inputs/AgreementsUpdateManyMutationInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AgreementsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  where?: AgreementsWhereInput | undefined;
}
