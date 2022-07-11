import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersUpdateInput } from "../../../inputs/PartnersUpdateInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePartnersArgs {
  @TypeGraphQL.Field(_type => PartnersUpdateInput, {
    nullable: false
  })
  data!: PartnersUpdateInput;

  @TypeGraphQL.Field(_type => PartnersWhereUniqueInput, {
    nullable: false
  })
  where!: PartnersWhereUniqueInput;
}
