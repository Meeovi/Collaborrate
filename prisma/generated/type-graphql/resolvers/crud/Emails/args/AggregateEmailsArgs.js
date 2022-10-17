"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/EmailsOrderByWithRelationAndSearchRelevanceInput");
const EmailsWhereInput_1 = require("../../../inputs/EmailsWhereInput");
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let AggregateEmailsArgs = class AggregateEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], AggregateEmailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsOrderByWithRelationAndSearchRelevanceInput_1.EmailsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEmailsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], AggregateEmailsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmailsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmailsArgs.prototype, "skip", void 0);
AggregateEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEmailsArgs);
exports.AggregateEmailsArgs = AggregateEmailsArgs;
