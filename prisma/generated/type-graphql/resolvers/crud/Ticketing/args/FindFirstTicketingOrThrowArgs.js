"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTicketingOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
const TicketingScalarFieldEnum_1 = require("../../../../enums/TicketingScalarFieldEnum");
let FindFirstTicketingOrThrowArgs = class FindFirstTicketingOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], FindFirstTicketingOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByWithRelationAndSearchRelevanceInput_1.TicketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTicketingOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], FindFirstTicketingOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTicketingOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTicketingOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingScalarFieldEnum_1.TicketingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTicketingOrThrowArgs.prototype, "distinct", void 0);
FindFirstTicketingOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTicketingOrThrowArgs);
exports.FindFirstTicketingOrThrowArgs = FindFirstTicketingOrThrowArgs;
