import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersCreateInput } from "../../../inputs/PartnersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePartnersArgs {
  @TypeGraphQL.Field(_type => PartnersCreateInput, {
    nullable: false
  })
  data!: PartnersCreateInput;
}
