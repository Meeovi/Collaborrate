"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let DeleteOneCurrency_symbolsArgs = class DeleteOneCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], DeleteOneCurrency_symbolsArgs.prototype, "where", void 0);
DeleteOneCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCurrency_symbolsArgs);
exports.DeleteOneCurrency_symbolsArgs = DeleteOneCurrency_symbolsArgs;
