import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesUpdateManyMutationInput } from "../../../inputs/ZonesUpdateManyMutationInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyZonesArgs {
  @TypeGraphQL.Field(_type => ZonesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ZonesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ZonesWhereInput, {
    nullable: true
  })
  where?: ZonesWhereInput | undefined;
}
