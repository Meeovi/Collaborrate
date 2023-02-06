"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateManyMutationInput_1 = require("../../../inputs/QuotesUpdateManyMutationInput");
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
let UpdateManyQuotesArgs = class UpdateManyQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput)
], UpdateManyQuotesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], UpdateManyQuotesArgs.prototype, "where", void 0);
UpdateManyQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyQuotesArgs);
exports.UpdateManyQuotesArgs = UpdateManyQuotesArgs;
