import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesCreateInput } from "../../../inputs/Gift_certificatesCreateInput";
import { Gift_certificatesUpdateInput } from "../../../inputs/Gift_certificatesUpdateInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput, {
    nullable: false
  })
  where!: Gift_certificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Gift_certificatesCreateInput, {
    nullable: false
  })
  create!: Gift_certificatesCreateInput;

  @TypeGraphQL.Field(_type => Gift_certificatesUpdateInput, {
    nullable: false
  })
  update!: Gift_certificatesUpdateInput;
}
