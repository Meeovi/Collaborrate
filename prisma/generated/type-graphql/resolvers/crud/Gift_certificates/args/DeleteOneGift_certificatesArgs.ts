import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput, {
    nullable: false
  })
  where!: Gift_certificatesWhereUniqueInput;
}
