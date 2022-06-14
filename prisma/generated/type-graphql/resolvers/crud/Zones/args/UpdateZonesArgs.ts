import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesUpdateInput } from "../../../inputs/ZonesUpdateInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateZonesArgs {
  @TypeGraphQL.Field(_type => ZonesUpdateInput, {
    nullable: false
  })
  data!: ZonesUpdateInput;

  @TypeGraphQL.Field(_type => ZonesWhereUniqueInput, {
    nullable: false
  })
  where!: ZonesWhereUniqueInput;
}
