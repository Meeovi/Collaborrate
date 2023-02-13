"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let LogInWhereUniqueInput = class LogInWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], LogInWhereUniqueInput.prototype, "id", void 0);
LogInWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LogInWhereUniqueInput", {
        isAbstract: true
    })
], LogInWhereUniqueInput);
exports.LogInWhereUniqueInput = LogInWhereUniqueInput;
