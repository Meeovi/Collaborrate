"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesUpdateInput_1 = require("../../../inputs/CurrenciesUpdateInput");
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let UpdateOneCurrenciesArgs = class UpdateOneCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesUpdateInput_1.CurrenciesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesUpdateInput_1.CurrenciesUpdateInput)
], UpdateOneCurrenciesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], UpdateOneCurrenciesArgs.prototype, "where", void 0);
UpdateOneCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCurrenciesArgs);
exports.UpdateOneCurrenciesArgs = UpdateOneCurrenciesArgs;
