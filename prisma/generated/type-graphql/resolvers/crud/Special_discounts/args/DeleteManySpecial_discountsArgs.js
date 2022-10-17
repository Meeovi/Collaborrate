"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsWhereInput_1 = require("../../../inputs/Special_discountsWhereInput");
let DeleteManySpecial_discountsArgs = class DeleteManySpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereInput_1.Special_discountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereInput_1.Special_discountsWhereInput)
], DeleteManySpecial_discountsArgs.prototype, "where", void 0);
DeleteManySpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySpecial_discountsArgs);
exports.DeleteManySpecial_discountsArgs = DeleteManySpecial_discountsArgs;
