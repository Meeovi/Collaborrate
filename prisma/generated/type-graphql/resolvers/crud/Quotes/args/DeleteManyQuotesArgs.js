"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
let DeleteManyQuotesArgs = class DeleteManyQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], DeleteManyQuotesArgs.prototype, "where", void 0);
DeleteManyQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQuotesArgs);
exports.DeleteManyQuotesArgs = DeleteManyQuotesArgs;
