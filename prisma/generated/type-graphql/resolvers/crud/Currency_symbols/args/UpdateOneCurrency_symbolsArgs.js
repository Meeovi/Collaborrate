"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsUpdateInput_1 = require("../../../inputs/Currency_symbolsUpdateInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let UpdateOneCurrency_symbolsArgs = class UpdateOneCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput)
], UpdateOneCurrency_symbolsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], UpdateOneCurrency_symbolsArgs.prototype, "where", void 0);
UpdateOneCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCurrency_symbolsArgs);
exports.UpdateOneCurrency_symbolsArgs = UpdateOneCurrency_symbolsArgs;
