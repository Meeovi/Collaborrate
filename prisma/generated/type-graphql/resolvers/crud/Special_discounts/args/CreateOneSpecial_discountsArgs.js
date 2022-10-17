"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsCreateInput_1 = require("../../../inputs/Special_discountsCreateInput");
let CreateOneSpecial_discountsArgs = class CreateOneSpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsCreateInput_1.Special_discountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Special_discountsCreateInput_1.Special_discountsCreateInput)
], CreateOneSpecial_discountsArgs.prototype, "data", void 0);
CreateOneSpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSpecial_discountsArgs);
exports.CreateOneSpecial_discountsArgs = CreateOneSpecial_discountsArgs;
