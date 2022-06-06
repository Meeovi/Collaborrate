"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
let DeleteManyTax_rateArgs = class DeleteManyTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], DeleteManyTax_rateArgs.prototype, "where", void 0);
DeleteManyTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTax_rateArgs);
exports.DeleteManyTax_rateArgs = DeleteManyTax_rateArgs;
