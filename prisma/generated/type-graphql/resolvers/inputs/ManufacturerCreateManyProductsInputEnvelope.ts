import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerCreateManyProductsInput } from "../inputs/ManufacturerCreateManyProductsInput";

@TypeGraphQL.InputType("ManufacturerCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class ManufacturerCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [ManufacturerCreateManyProductsInput], {
    nullable: false
  })
  data!: ManufacturerCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
