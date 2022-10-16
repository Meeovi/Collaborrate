"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Special_discountsWhereUniqueInput = class Special_discountsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Special_discountsWhereUniqueInput.prototype, "id", void 0);
Special_discountsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Special_discountsWhereUniqueInput", {
        isAbstract: true
    })
], Special_discountsWhereUniqueInput);
exports.Special_discountsWhereUniqueInput = Special_discountsWhereUniqueInput;
