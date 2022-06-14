import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersCreateInput } from "../../../inputs/PartnersCreateInput";
import { PartnersUpdateInput } from "../../../inputs/PartnersUpdateInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPartnersArgs {
  @TypeGraphQL.Field(_type => PartnersWhereUniqueInput, {
    nullable: false
  })
  where!: PartnersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PartnersCreateInput, {
    nullable: false
  })
  create!: PartnersCreateInput;

  @TypeGraphQL.Field(_type => PartnersUpdateInput, {
    nullable: false
  })
  update!: PartnersUpdateInput;
}
