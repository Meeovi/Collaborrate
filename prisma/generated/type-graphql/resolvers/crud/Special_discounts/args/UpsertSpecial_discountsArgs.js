"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsCreateInput_1 = require("../../../inputs/Special_discountsCreateInput");
const Special_discountsUpdateInput_1 = require("../../../inputs/Special_discountsUpdateInput");
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
let UpsertSpecial_discountsArgs = class UpsertSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], UpsertSpecial_discountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsCreateInput_1.Special_discountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsCreateInput_1.Special_discountsCreateInput)
], UpsertSpecial_discountsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsUpdateInput_1.Special_discountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsUpdateInput_1.Special_discountsUpdateInput)
], UpsertSpecial_discountsArgs.prototype, "update", void 0);
UpsertSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSpecial_discountsArgs);
exports.UpsertSpecial_discountsArgs = UpsertSpecial_discountsArgs;
