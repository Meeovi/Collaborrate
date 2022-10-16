"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateInput_1 = require("../../../inputs/Tax_rateCreateInput");
let CreateOneTax_rateArgs = class CreateOneTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateInput_1.Tax_rateCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateInput_1.Tax_rateCreateInput)
], CreateOneTax_rateArgs.prototype, "data", void 0);
CreateOneTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTax_rateArgs);
exports.CreateOneTax_rateArgs = CreateOneTax_rateArgs;
