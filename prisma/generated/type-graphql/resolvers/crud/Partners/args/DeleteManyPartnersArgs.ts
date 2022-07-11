import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPartnersArgs {
  @TypeGraphQL.Field(_type => PartnersWhereInput, {
    nullable: true
  })
  where?: PartnersWhereInput | undefined;
}
