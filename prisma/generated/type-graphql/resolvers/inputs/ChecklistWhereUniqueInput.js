"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ChecklistWhereUniqueInput = class ChecklistWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ChecklistWhereUniqueInput.prototype, "id", void 0);
ChecklistWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChecklistWhereUniqueInput", {
        isAbstract: true
    })
], ChecklistWhereUniqueInput);
exports.ChecklistWhereUniqueInput = ChecklistWhereUniqueInput;
