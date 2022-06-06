"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateInput_1 = require("../../../inputs/QuotesCreateInput");
let CreateQuotesArgs = class CreateQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateInput_1.QuotesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateInput_1.QuotesCreateInput)
], CreateQuotesArgs.prototype, "data", void 0);
CreateQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateQuotesArgs);
exports.CreateQuotesArgs = CreateQuotesArgs;
