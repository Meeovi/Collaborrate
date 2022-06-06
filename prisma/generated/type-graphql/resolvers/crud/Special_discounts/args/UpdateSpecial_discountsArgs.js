"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsUpdateInput_1 = require("../../../inputs/Special_discountsUpdateInput");
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
let UpdateSpecial_discountsArgs = class UpdateSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsUpdateInput_1.Special_discountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsUpdateInput_1.Special_discountsUpdateInput)
], UpdateSpecial_discountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], UpdateSpecial_discountsArgs.prototype, "where", void 0);
UpdateSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSpecial_discountsArgs);
exports.UpdateSpecial_discountsArgs = UpdateSpecial_discountsArgs;
