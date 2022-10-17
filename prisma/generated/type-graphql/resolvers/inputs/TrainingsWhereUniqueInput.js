"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let TrainingsWhereUniqueInput = class TrainingsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TrainingsWhereUniqueInput.prototype, "id", void 0);
TrainingsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TrainingsWhereUniqueInput", {
        isAbstract: true
    })
], TrainingsWhereUniqueInput);
exports.TrainingsWhereUniqueInput = TrainingsWhereUniqueInput;
