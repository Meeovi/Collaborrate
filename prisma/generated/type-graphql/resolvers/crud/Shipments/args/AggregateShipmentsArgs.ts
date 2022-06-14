import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsOrderByWithRelationInput } from "../../../inputs/ShipmentsOrderByWithRelationInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereInput, {
    nullable: true
  })
  where?: ShipmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShipmentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShipmentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShipmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
