"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
let DeleteOneSpecial_discountsArgs = class DeleteOneSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], DeleteOneSpecial_discountsArgs.prototype, "where", void 0);
DeleteOneSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSpecial_discountsArgs);
exports.DeleteOneSpecial_discountsArgs = DeleteOneSpecial_discountsArgs;
