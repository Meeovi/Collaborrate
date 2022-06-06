"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateInput_1 = require("../../../inputs/Tax_rateCreateInput");
let CreateTax_rateArgs = class CreateTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateInput_1.Tax_rateCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateInput_1.Tax_rateCreateInput)
], CreateTax_rateArgs.prototype, "data", void 0);
CreateTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTax_rateArgs);
exports.CreateTax_rateArgs = CreateTax_rateArgs;
