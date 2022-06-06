"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesWhereInput_1 = require("../../../inputs/Currency_ratesWhereInput");
let DeleteManyCurrency_ratesArgs = class DeleteManyCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereInput_1.Currency_ratesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereInput_1.Currency_ratesWhereInput)
], DeleteManyCurrency_ratesArgs.prototype, "where", void 0);
DeleteManyCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCurrency_ratesArgs);
exports.DeleteManyCurrency_ratesArgs = DeleteManyCurrency_ratesArgs;
