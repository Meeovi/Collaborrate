import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsCreateManyInput } from "../../../inputs/ShipmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShipmentsArgs {
  @TypeGraphQL.Field(_type => [ShipmentsCreateManyInput], {
    nullable: false
  })
  data!: ShipmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
