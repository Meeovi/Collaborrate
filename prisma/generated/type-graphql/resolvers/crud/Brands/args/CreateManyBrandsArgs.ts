import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsCreateManyInput } from "../../../inputs/BrandsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBrandsArgs {
  @TypeGraphQL.Field(_type => [BrandsCreateManyInput], {
    nullable: false
  })
  data!: BrandsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
