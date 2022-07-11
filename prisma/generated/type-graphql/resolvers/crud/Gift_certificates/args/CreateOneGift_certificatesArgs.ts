import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesCreateInput } from "../../../inputs/Gift_certificatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesCreateInput, {
    nullable: false
  })
  data!: Gift_certificatesCreateInput;
}
