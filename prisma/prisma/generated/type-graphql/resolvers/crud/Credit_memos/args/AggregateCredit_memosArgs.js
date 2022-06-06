"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByWithRelationInput_1 = require("../../../inputs/Credit_memosOrderByWithRelationInput");
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
let AggregateCredit_memosArgs = class AggregateCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], AggregateCredit_memosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosOrderByWithRelationInput_1.Credit_memosOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCredit_memosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], AggregateCredit_memosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCredit_memosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCredit_memosArgs.prototype, "skip", void 0);
AggregateCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCredit_memosArgs);
exports.AggregateCredit_memosArgs = AggregateCredit_memosArgs;
