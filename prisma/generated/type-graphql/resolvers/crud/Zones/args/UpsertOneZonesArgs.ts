import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesCreateInput } from "../../../inputs/ZonesCreateInput";
import { ZonesUpdateInput } from "../../../inputs/ZonesUpdateInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereUniqueInput, {
    nullable: false
  })
  where!: ZonesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZonesCreateInput, {
    nullable: false
  })
  create!: ZonesCreateInput;

  @TypeGraphQL.Field(_type => ZonesUpdateInput, {
    nullable: false
  })
  update!: ZonesUpdateInput;
}
