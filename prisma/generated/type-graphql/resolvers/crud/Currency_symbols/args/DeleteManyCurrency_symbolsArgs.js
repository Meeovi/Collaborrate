"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
let DeleteManyCurrency_symbolsArgs = class DeleteManyCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], DeleteManyCurrency_symbolsArgs.prototype, "where", void 0);
DeleteManyCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCurrency_symbolsArgs);
exports.DeleteManyCurrency_symbolsArgs = DeleteManyCurrency_symbolsArgs;
