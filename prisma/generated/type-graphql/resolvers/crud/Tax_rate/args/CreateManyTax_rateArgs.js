"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateManyInput_1 = require("../../../inputs/Tax_rateCreateManyInput");
let CreateManyTax_rateArgs = class CreateManyTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateManyInput_1.Tax_rateCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTax_rateArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTax_rateArgs.prototype, "skipDuplicates", void 0);
CreateManyTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTax_rateArgs);
exports.CreateManyTax_rateArgs = CreateManyTax_rateArgs;
