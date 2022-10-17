"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput");
const MessagesWhereInput_1 = require("../../../inputs/MessagesWhereInput");
const MessagesWhereUniqueInput_1 = require("../../../inputs/MessagesWhereUniqueInput");
let AggregateMessagesArgs = class AggregateMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereInput_1.MessagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereInput_1.MessagesWhereInput)
], AggregateMessagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesOrderByWithRelationAndSearchRelevanceInput_1.MessagesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMessagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereUniqueInput_1.MessagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereUniqueInput_1.MessagesWhereUniqueInput)
], AggregateMessagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMessagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMessagesArgs.prototype, "skip", void 0);
AggregateMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMessagesArgs);
exports.AggregateMessagesArgs = AggregateMessagesArgs;
