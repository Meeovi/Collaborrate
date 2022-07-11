import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePartnersArgs {
  @TypeGraphQL.Field(_type => PartnersWhereUniqueInput, {
    nullable: false
  })
  where!: PartnersWhereUniqueInput;
}
