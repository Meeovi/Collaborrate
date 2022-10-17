"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesUpdateInput_1 = require("../../../inputs/Currency_ratesUpdateInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let UpdateOneCurrency_ratesArgs = class UpdateOneCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesUpdateInput_1.Currency_ratesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesUpdateInput_1.Currency_ratesUpdateInput)
], UpdateOneCurrency_ratesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], UpdateOneCurrency_ratesArgs.prototype, "where", void 0);
UpdateOneCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCurrency_ratesArgs);
exports.UpdateOneCurrency_ratesArgs = UpdateOneCurrency_ratesArgs;
