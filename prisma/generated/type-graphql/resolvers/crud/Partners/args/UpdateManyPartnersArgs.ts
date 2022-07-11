import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersUpdateManyMutationInput } from "../../../inputs/PartnersUpdateManyMutationInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPartnersArgs {
  @TypeGraphQL.Field(_type => PartnersUpdateManyMutationInput, {
    nullable: false
  })
  data!: PartnersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PartnersWhereInput, {
    nullable: true
  })
  where?: PartnersWhereInput | undefined;
}
