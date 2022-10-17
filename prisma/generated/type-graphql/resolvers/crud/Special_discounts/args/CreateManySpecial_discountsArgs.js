"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsCreateManyInput_1 = require("../../../inputs/Special_discountsCreateManyInput");
let CreateManySpecial_discountsArgs = class CreateManySpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsCreateManyInput_1.Special_discountsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySpecial_discountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySpecial_discountsArgs.prototype, "skipDuplicates", void 0);
CreateManySpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySpecial_discountsArgs);
exports.CreateManySpecial_discountsArgs = CreateManySpecial_discountsArgs;
