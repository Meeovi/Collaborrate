"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
let DeleteSpecial_discountsArgs = class DeleteSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], DeleteSpecial_discountsArgs.prototype, "where", void 0);
DeleteSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSpecial_discountsArgs);
exports.DeleteSpecial_discountsArgs = DeleteSpecial_discountsArgs;
