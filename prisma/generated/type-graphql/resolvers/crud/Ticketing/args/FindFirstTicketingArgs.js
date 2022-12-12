"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
const TicketingScalarFieldEnum_1 = require("../../../../enums/TicketingScalarFieldEnum");
let FindFirstTicketingArgs = class FindFirstTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], FindFirstTicketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByWithRelationAndSearchRelevanceInput_1.TicketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTicketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], FindFirstTicketingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTicketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTicketingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingScalarFieldEnum_1.TicketingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTicketingArgs.prototype, "distinct", void 0);
FindFirstTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTicketingArgs);
exports.FindFirstTicketingArgs = FindFirstTicketingArgs;
