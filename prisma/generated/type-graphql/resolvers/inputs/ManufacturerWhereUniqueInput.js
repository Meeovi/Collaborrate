"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ManufacturerWhereUniqueInput = class ManufacturerWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerWhereUniqueInput.prototype, "id", void 0);
ManufacturerWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerWhereUniqueInput", {
        isAbstract: true
    })
], ManufacturerWhereUniqueInput);
exports.ManufacturerWhereUniqueInput = ManufacturerWhereUniqueInput;
