"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput");
const MessagesWhereInput_1 = require("../../../inputs/MessagesWhereInput");
const MessagesWhereUniqueInput_1 = require("../../../inputs/MessagesWhereUniqueInput");
const MessagesScalarFieldEnum_1 = require("../../../../enums/MessagesScalarFieldEnum");
let FindManyMessagesArgs = class FindManyMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereInput_1.MessagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereInput_1.MessagesWhereInput)
], FindManyMessagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesOrderByWithRelationAndSearchRelevanceInput_1.MessagesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMessagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereUniqueInput_1.MessagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereUniqueInput_1.MessagesWhereUniqueInput)
], FindManyMessagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMessagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMessagesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesScalarFieldEnum_1.MessagesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMessagesArgs.prototype, "distinct", void 0);
FindManyMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMessagesArgs);
exports.FindManyMessagesArgs = FindManyMessagesArgs;
