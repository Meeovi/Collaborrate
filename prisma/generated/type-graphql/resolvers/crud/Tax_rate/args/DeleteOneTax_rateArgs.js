"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
let DeleteOneTax_rateArgs = class DeleteOneTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], DeleteOneTax_rateArgs.prototype, "where", void 0);
DeleteOneTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTax_rateArgs);
exports.DeleteOneTax_rateArgs = DeleteOneTax_rateArgs;
