import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesUpdateInput } from "../../../inputs/Gift_certificatesUpdateInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesUpdateInput, {
    nullable: false
  })
  data!: Gift_certificatesUpdateInput;

  @TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput, {
    nullable: false
  })
  where!: Gift_certificatesWhereUniqueInput;
}
