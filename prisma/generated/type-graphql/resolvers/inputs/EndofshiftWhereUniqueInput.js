"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let EndofshiftWhereUniqueInput = class EndofshiftWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], EndofshiftWhereUniqueInput.prototype, "id", void 0);
EndofshiftWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EndofshiftWhereUniqueInput", {
        isAbstract: true
    })
], EndofshiftWhereUniqueInput);
exports.EndofshiftWhereUniqueInput = EndofshiftWhereUniqueInput;
