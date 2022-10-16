"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsUpdateInput_1 = require("../../../inputs/Special_discountsUpdateInput");
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
let UpdateOneSpecial_discountsArgs = class UpdateOneSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsUpdateInput_1.Special_discountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsUpdateInput_1.Special_discountsUpdateInput)
], UpdateOneSpecial_discountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], UpdateOneSpecial_discountsArgs.prototype, "where", void 0);
UpdateOneSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSpecial_discountsArgs);
exports.UpdateOneSpecial_discountsArgs = UpdateOneSpecial_discountsArgs;
