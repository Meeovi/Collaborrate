"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let InternalizationWhereUniqueInput = class InternalizationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InternalizationWhereUniqueInput.prototype, "id", void 0);
InternalizationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationWhereUniqueInput", {
        isAbstract: true
    })
], InternalizationWhereUniqueInput);
exports.InternalizationWhereUniqueInput = InternalizationWhereUniqueInput;
