"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsUpdateManyMutationInput_1 = require("../../../inputs/Special_discountsUpdateManyMutationInput");
const Special_discountsWhereInput_1 = require("../../../inputs/Special_discountsWhereInput");
let UpdateManySpecial_discountsArgs = class UpdateManySpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsUpdateManyMutationInput_1.Special_discountsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsUpdateManyMutationInput_1.Special_discountsUpdateManyMutationInput)
], UpdateManySpecial_discountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereInput_1.Special_discountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereInput_1.Special_discountsWhereInput)
], UpdateManySpecial_discountsArgs.prototype, "where", void 0);
UpdateManySpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySpecial_discountsArgs);
exports.UpdateManySpecial_discountsArgs = UpdateManySpecial_discountsArgs;
