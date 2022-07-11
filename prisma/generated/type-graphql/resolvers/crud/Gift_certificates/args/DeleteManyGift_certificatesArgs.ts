import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereInput, {
    nullable: true
  })
  where?: Gift_certificatesWhereInput | undefined;
}
