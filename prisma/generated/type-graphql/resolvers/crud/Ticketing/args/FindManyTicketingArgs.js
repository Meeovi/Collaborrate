"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
const TicketingScalarFieldEnum_1 = require("../../../../enums/TicketingScalarFieldEnum");
let FindManyTicketingArgs = class FindManyTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], FindManyTicketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByWithRelationAndSearchRelevanceInput_1.TicketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTicketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], FindManyTicketingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTicketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTicketingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingScalarFieldEnum_1.TicketingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTicketingArgs.prototype, "distinct", void 0);
FindManyTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTicketingArgs);
exports.FindManyTicketingArgs = FindManyTicketingArgs;
