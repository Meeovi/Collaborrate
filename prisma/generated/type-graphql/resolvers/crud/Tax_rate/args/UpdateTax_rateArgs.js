"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateUpdateInput_1 = require("../../../inputs/Tax_rateUpdateInput");
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
let UpdateTax_rateArgs = class UpdateTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateInput_1.Tax_rateUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateInput_1.Tax_rateUpdateInput)
], UpdateTax_rateArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], UpdateTax_rateArgs.prototype, "where", void 0);
UpdateTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTax_rateArgs);
exports.UpdateTax_rateArgs = UpdateTax_rateArgs;
