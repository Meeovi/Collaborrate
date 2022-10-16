"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let DeleteOneCurrency_ratesArgs = class DeleteOneCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], DeleteOneCurrency_ratesArgs.prototype, "where", void 0);
DeleteOneCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCurrency_ratesArgs);
exports.DeleteOneCurrency_ratesArgs = DeleteOneCurrency_ratesArgs;
