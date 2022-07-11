import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateManyProducts_occassionsToproductsInput";

@TypeGraphQL.InputType("OccassionsCreateManyProducts_occassionsToproductsInputEnvelope", {
  isAbstract: true
})
export class OccassionsCreateManyProducts_occassionsToproductsInputEnvelope {
  @TypeGraphQL.Field(_type => [OccassionsCreateManyProducts_occassionsToproductsInput], {
    nullable: false
  })
  data!: OccassionsCreateManyProducts_occassionsToproductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
