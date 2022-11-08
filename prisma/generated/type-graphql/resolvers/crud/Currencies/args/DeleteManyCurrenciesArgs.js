"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
let DeleteManyCurrenciesArgs = class DeleteManyCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], DeleteManyCurrenciesArgs.prototype, "where", void 0);
DeleteManyCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCurrenciesArgs);
exports.DeleteManyCurrenciesArgs = DeleteManyCurrenciesArgs;
